import React, { useState, useLayoutEffect, useRef } from "react";

const SectionTitle = (props: any) => {
  const [colorPrimary, setColorPrimary] = useState("#00");
  const [colorSecondary, setcolorSecondary] = useState("#00");
  const cp = useRef<HTMLElement>(null);
  const cs = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (cp.current && cs.current) {
      setColorPrimary(window.getComputedStyle(cp.current, null).getPropertyValue("color"));
      setcolorSecondary(window.getComputedStyle(cs.current, null).getPropertyValue("color"));
    }
  }, []);

  return (
    <>
      <span ref={cp} className="color-primary"></span>
      <span ref={cs} className="color-secondary"></span>
      <svg width="100%" height="150" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <linearGradient id={"primaryGradient"} x1="0" x2="100%" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor={colorPrimary} offset="0%" />
          <stop stopColor={colorSecondary} offset="100%" />
        </linearGradient>
        <text textAnchor="middle" x="50" y="52" fill={"url(#primaryGradient)"}>
          {props.title}
        </text>
      </svg>
    </>
  );
};

export default SectionTitle;
