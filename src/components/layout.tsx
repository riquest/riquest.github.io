import React, { ReactNode } from "react";
import Head from "./head";
import Navbar from "./navbar";
import Footer from "./footer";
import styled from "styled-components";
import ThemeProvider from "./themeProvider";
import { ColorModeProvider } from "../context/colorMode";

interface Props {
  className?: string;
  children?: ReactNode;
  placeholder?: boolean;
}
const Layout = ({ className, placeholder, children }: Props) => {
  return (
    <div className={className}>
      <ColorModeProvider>
        <ThemeProvider>
          <>
            <Head />
            <Navbar placeholder={placeholder === undefined ? true : placeholder} />
            <div className="wrapper">{children}</div>
            <Footer />
          </>
        </ThemeProvider>
      </ColorModeProvider>
    </div>
  );
};

export default styled(Layout)`
  position: relative;
  min-height: 100vh;

  .wrapper {
    padding-bottom: 14rem;
  }
`;
