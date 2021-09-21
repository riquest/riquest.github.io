import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import Sidebar from "react-sidebar";
import NavLinks from "./navlinks";
import Logo from "./logo";
import { Hamburger } from "./icons";
import styled from "styled-components";

import "../style/navbar.less";

const SideBarcontent = styled.div`
  background: var(--backgroundColor);
  padding: 22px;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  .switch-theme {
    display: inline-block;
  }

  .links {
    flex: 1 1 auto;
    display: flex;
    align-items: center;

    ul {
      list-style: none;

      li {
        margin: 20px 0;
      }
    }
  }
`;

function Sidebarcontent() {
  return (
    <SideBarcontent>
      <div className="sidebar-content">
        <div className="links text-primary">
          <NavLinks />
        </div>
      </div>
    </SideBarcontent>
  );
}

interface Props {
  className?: string;
  placeholder: boolean;
}

const Navbar = (props: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navbarPlaceholderHeight, setNavbarPlaceholderHeight] = useState(100);
  const myNav = useRef<HTMLElement>(null);

  const menuOpen = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault();
    setSidebarOpen(true);
  };

  const changeNavbarPlaceholderHeight = () => {
    if (myNav.current) {
      const newNavbarPlaceholderHeight = myNav.current.offsetHeight;
      setNavbarPlaceholderHeight(newNavbarPlaceholderHeight);
    }
  };

  useEffect(() => {
    changeNavbarPlaceholderHeight();

    if (myNav?.current) {
      const logo = myNav.current.querySelector(".logo");

      if (logo) {
        logo.addEventListener("load", () => {
          changeNavbarPlaceholderHeight();
        });
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (myNav.current) {
        if (window.scrollY > 0) {
          myNav.current.classList.add("scrolled");
        } else {
          myNav.current.classList.remove("scrolled");
        }
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Sidebar
        sidebar={<Sidebarcontent />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        sidebarClassName="sidebar-content"
        styles={{
          sidebar: {
            zIndex: "101",
            position: "fixed",
            minWidth: "45%",
            maxWidth: "75%",
          },
          overlay: {
            zIndex: "100",
          },
          dragHandle: {
            position: "fixed",
            zIndex: "99999",
          },
        }}
      >
        <span></span>
      </Sidebar>
      <nav ref={myNav} className={`text-primary ${props.className}`}>
        <a href="#mobilenav" id="menu-open" onClick={menuOpen}>
          <span className="icon">
            <Hamburger />
          </span>
        </a>
        <Link to="/">
          <Logo />
        </Link>
        <NavLinks />
      </nav>
      {props.placeholder && (
        <div
          className="navbar-placeholder"
          style={{
            height: navbarPlaceholderHeight + "px",
          }}
        ></div>
      )}
    </React.Fragment>
  );
};

export default styled(Navbar)`
  background: var(--backgroundColor);
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  padding: 10px 44px;
  align-items: center;
  z-index: 99;
  transition: height 0.25s;

  #menu-open {
    position: absolute;
    left: 5%;
    display: none;

    .icon {
      width: 32px;
      height: 32px;
    }
  }

  img {
    width: 250px;
    height: auto;
    align-items: center;
    transition: width 0.25s;
  }

  a {
    display: inherit;
  }

  &.scrolled {
    padding: 12px 36px;
    vertical-align: middle;
    border-bottom: solid 1px var(--backgroundColorDarker);
    img {
      width: 150px;
    }
  }

  ul {
    list-style: none;

    li {
      display: inline-block;
      vertical-align: middle;

      a {
        margin: 0 10px;
        position: relative;

        text-decoration: none;
        display: inline-block;
        color: var(--textPrimary);
        :after {
          content: "";
          display: block;
          height: 3px;
          width: 0;
          background: transparent;
          transition: width 0.3s ease, background-color 0.3s ease;
          -webkit-transition: width 0.3s ease, background-color 0.3s ease;
          -moz-transition: width 0.3s ease, background-color 0.3s ease;
        }

        &.active :after,
        :focus:after,
        :hover:after {
          width: 100%;
          background: var(--mainRed);
        }

        span {
          position: relative;
          z-index: 2;
        }
      }
    }
  }

  @media only screen and (max-width: 800px) {
    justify-content: center;

    img {
      width: 200px;
    }

    &.scrolled {
      padding: 10px 36px;

      img {
        width: 150px;
      }
    }

    ul {
      display: none;
    }

    #menu-open {
      display: block;
    }
  }
`;
