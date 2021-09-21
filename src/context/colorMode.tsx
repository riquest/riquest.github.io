import React, { useEffect } from "react";

import { themeVariables } from "../globalVariables";
import { useStaticQuery, graphql } from "gatsby";

const COLOR_MODE = "colorMode";
type ColorModeType = "light" | "dark";

const setCSSVariables = (colorMode: ColorModeType) => {
  const modeValues = themeVariables[colorMode];
  Object.entries(modeValues).forEach(([key, value]) => document.documentElement.style.setProperty(`--${key}`, value));
};

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined";

function getInitialColorMode({ defaultColorMode }: { defaultColorMode: ColorModeType }): ColorModeType {
  if (isBrowser) {
    const persistedColorPreference = window.localStorage.getItem(COLOR_MODE);
    const isValidPersistedColorPreference = (test: string | null): test is ColorModeType =>
      persistedColorPreference === "light" || persistedColorPreference === "dark";

    // If the user has explicitly chosen light or dark,
    // let's use it.
    if (isValidPersistedColorPreference(persistedColorPreference)) {
      return persistedColorPreference;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean";

    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light";
    }
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return defaultColorMode;
}

const initalValue = {
  colorMode: "string",
  setColorMode: (_: ColorModeType) => {
    console.error("setColor must be overriden");
  },
};

export const ColorModeContext = React.createContext(initalValue);
export const ColorModeProvider = ({ children }: { children: JSX.Element }) => {
  const data = useStaticQuery(graphql`
    query getDefaultColorMode {
      site {
        siteMetadata {
          defaultColorMode
        }
      }
    }
  `);
  const defaultColorMode = data.site.siteMetadata.defaultColorMode;
  const initialColorMode = getInitialColorMode({ defaultColorMode });

  const [colorMode, rawSetColorMode] = React.useState<ColorModeType>(initialColorMode);

  useEffect(() => {
    setCSSVariables(colorMode);
  }, [colorMode]);

  const setColorMode = (value: ColorModeType) => {
    rawSetColorMode(value);
    // Persist it on update
    window.localStorage.setItem(COLOR_MODE, value);
  };
  return <ColorModeContext.Provider value={{ colorMode, setColorMode }}>{children}</ColorModeContext.Provider>;
};
