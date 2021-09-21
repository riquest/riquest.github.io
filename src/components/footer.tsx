import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navlinks from "./navlinks";
import styled from "styled-components";
import "../style/footer.less";

const Footer = function ({ className }: { className?: string }) {
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mainName
        }
      }
    }
  `);

  return (
    <footer className={"footer " + className}>
      <div className="container">
        <div className="navlinks text-primary">
          <Navlinks />
        </div>
        <p className="text-secondary f-d">
          &copy; {new Date().getFullYear()} {query.site.siteMetadata.mainName}
        </p>
      </div>
    </footer>
  );
};

export default styled(Footer)`
  background: var(--backgroundColorDarker);
  position: absolute;
  bottom: 0;
  width: 100%;

  padding: 30px 0;
  text-align: center;

  .navlinks {
    ul {
      list-style: none;

      li {
        display: inline-block;
        margin: 0 10px;
        vertical-align: middle;
      }
    }
  }

  .f-d {
    margin-top: 15px;
  }
`;
