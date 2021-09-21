import React, { useState, useRef, useLayoutEffect } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Date from "./date";
import { Calendar } from "./icons";
import "../style/news-list.less";

const NewsItem = (props: any) => {
  const [color, setColor] = useState("");
  const textSecondary = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (textSecondary && textSecondary.current) {
      setColor(window.getComputedStyle(textSecondary.current, null).getPropertyValue("color"));
      const calendar = textSecondary.current.querySelector("path");
      calendar && calendar.setAttribute("fill", color);
    }
  }, [color]);

  return (
    <div className="item col s12 m6">
      <div className="box">
        <div className="image">
          {/* <Img fluid={props.data.node.frontmatter.image.childImageSharp.fluid} /> */}
          <Link
            to={props.data.node.frontmatter.url}
            title={props.data.node.frontmatter.title}
            aria-label={props.data.node.frontmatter.title}
            className="overlay-link"
            style={{ opacity: 0 }}
          >
            {props.data.node.frontmatter.title}
          </Link>
        </div>
        <div className="content">
          <h3 className="text-primary">
            <Link to={props.data.node.frontmatter.url} title={props.data.node.frontmatter.title}>
              {props.data.node.frontmatter.title}
            </Link>
          </h3>
          <p className="text-secondarr">{props.data.node.frontmatter.description}</p>
          <p className="date text-tertiary" ref={textSecondary}>
            <span className="icon">
              <Calendar />
            </span>
            <Date data={props.data.node.frontmatter.date} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default function (props: any) {
  const data = props.data.allMarkdownRemark.edges;
  const items: any[] = [];
  data.forEach(function (e: any) {
    if (props.remove && e.node.id === props.remove) return;
    items.push(<NewsItem key={e.node.id} data={e} />);
  });
  return <div className="row">{items}</div>;
}
