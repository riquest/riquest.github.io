import React from "react";
import { ThemeProvider } from "styled-components";
import Globalstyle from "../ui-components/globalstyle";
import { ColorModeContext } from "../context/colorMode";

export default ({ children }: { children: JSX.Element }) => {
  const { colorMode } = React.useContext(ColorModeContext);
  const theme = { colorMode: colorMode };

  return (
    <ThemeProvider theme={theme}>
      <Globalstyle {...theme} />
      {children}
    </ThemeProvider>
  );
};
