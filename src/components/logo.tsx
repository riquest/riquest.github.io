import React, { useContext, useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-react-intl";
import { ColorModeContext } from "../context/colorMode";

const Logo = (): JSX.Element => {
  const [logo, setLogo] = useState("logo");
  const intl = useIntl();
  const { colorMode } = useContext(ColorModeContext);
  const query = useStaticQuery(graphql`
    query LogoQuery {
      site {
        siteMetadata {
          logo
          logoDark
        }
      }
    }
  `);

  useEffect(() => {
    setLogo(colorMode === "dark" ? "logoDark" : "logo");
  }, [colorMode]);

  return (
    <img className="logo" src={query.site.siteMetadata[logo]} alt={intl.formatMessage({ id: "default.seoTitle" })} />
  );
};

export default Logo;
