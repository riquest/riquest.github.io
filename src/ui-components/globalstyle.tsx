import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../types";

export default createGlobalStyle<ThemeType>`
  body {
    background: var(--backgroundColor);
  }

  a {
    color: var(--textSecondary);
  }
`;
