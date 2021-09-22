import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Header = (): JSX.Element => {
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          logo
        }
      }
    }
  `);
  return (
    <Helmet>
      <link rel="icon" href={query.site.siteMetadata.logo} type="image/png" />
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/akzhy/trunk/dist/trunk.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Work+Sans:800|Poppins&display=swap" rel="stylesheet" />
    </Helmet>
  );
};

export default Header;
