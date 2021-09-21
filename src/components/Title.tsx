import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  className?: string;
}

const Title = ({ text, className }: Props) => {
  return <div className={className}>{text}</div>;
};

export default styled(Title)`
  font-size: 4rem;
  background: linear-gradient(45deg, var(--mainRed), var(--gradientSecondary));
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  display: inline-block;

  :not(:first-child) {
    margin-top: 2rem;
  }
`;
