import React, { useContext } from "react";
import { Sun, Moon } from "./icons";
import { useIntl, Link as MultiLangLink, changeLocale } from "gatsby-plugin-react-intl";
import useCurrentPage from "../hooks/useCurrentPage";
import styled from "styled-components";
import { ColorModeContext } from "../context/colorMode";
import { languageConfig } from "../globalVariables";
import { Twitter as TwitterIcon } from "../components/icons";

function SwitchLang() {
  const { locale } = useIntl();
  const currentPage = useCurrentPage();
  return (
    <>
      {Object.entries(languageConfig).map(
        ([lang, name]) =>
          lang !== locale && (
            <li className={"lang"} key={lang} onClick={() => changeLocale(lang, `/${currentPage}`)}>
              {name}
            </li>
          ),
      )}
    </>
  );
}

const StyledSpan = styled.span`
  margin: 0 0.5rem;
  display: inline-block;
  height: 24px;
  vertical-align: middle;
  opacity: 0.7;
  transition: opacity 0.25s;

  &:hover {
    opacity: 1 !important;
  }
`;

const Twitter = (): JSX.Element => {
  return (
    <StyledSpan>
      <a href="https://twitter.com/RiquestAsso" title="Twitter">
        <TwitterIcon />
      </a>
    </StyledSpan>
  );
};

function ListItem(props: { data: any }) {
  const data = props.data;
  const anchorAttrs = {
    href: data.url,
    title: data.name,
  };
  const currentPage = useCurrentPage();

  return (
    <li key={data.url}>
      <MultiLangLink to={data.url} {...anchorAttrs} className={"/" + currentPage === data.url ? "active" : ""}>
        <span>{data.name}</span>
      </MultiLangLink>
    </li>
  );
}

const ThemeSwitchButton = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);
  const darkMode = colorMode === "dark";

  const swichClick = () => {
    const nextMode = colorMode === "light" ? "dark" : "light";
    setColorMode(nextMode);
  };

  return (
    <React.Fragment>
      <li className="switch-theme">
        <div role="button" className="switch-button" onClick={swichClick}>
          <div title="Switch to Dark Mode" data-switch-to="dark" className={!darkMode ? "active" : ""}>
            <Moon />
          </div>
          <div title="Switch to Light Mode" data-switch-to="light" className={darkMode ? "active" : ""}>
            <Sun />
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

const NavLinks = function ({ className }: { className?: string }) {
  const { formatMessage } = useIntl();
  const list = [];

  const navLinks = [
    {
      name: formatMessage({
        id: "nav.home",
        defaultMessage: "ACCUEIL",
      }),
      url: "/",
    },
    {
      name: formatMessage({
        id: "nav.about",
        defaultMessage: "A PROPOS",
      }),
      url: "/about",
    },
    {
      name: formatMessage({
        id: "nav.projects",
        defaultMessage: "NOS PROJETS",
      }),
      url: "/projects",
    },
    {
      name: formatMessage({
        id: "nav.ressources",
        defaultMessage: "RESSOURCES",
      }),
      url: "/ressources",
    },
    {
      name: formatMessage({
        id: "nav.contact",
        defaultMessage: "CONTACT",
      }),
      url: "/contact",
    },
  ];

  navLinks.forEach(function (e: any, i: any) {
    list.push(<ListItem key={e.url + "-" + i} data={e} />);
  });

  // list.push(<SwitchLang key={"lang"} />);
  list.push(<Twitter />);

  list.push(<ThemeSwitchButton key="themeswitcher" />);

  return <ul className={`navbar-links ${className}`}>{list}</ul>;
};

export default styled(NavLinks)`
  .lang {
    cursor: pointer;
    margin: 0 10px;
  }
`;
