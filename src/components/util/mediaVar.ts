/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { css } from "styled-components";

type Device = "mobile" | "tablet" | "desktop";

export const breakpoints: Record<Device, string> = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1200px",
};

export const respondTo = Object.keys(breakpoints).reduce((accumulator: any, label: any) => {
  accumulator[label] = (...args: any) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
