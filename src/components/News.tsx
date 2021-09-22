import React from "react";
import "../style/news-list.less";
import NewsItem from "./NewsItem";

const News = (props: any) => {
  const data = props.data.allMarkdownRemark.edges;
  const items: any[] = [];
  data.forEach(function (e: any) {
    if (props.remove && e.node.id === props.remove) return;
    items.push(<NewsItem key={e.node.id} data={e} />);
  });
  return <div className="row">{items}</div>;
};

export default News;
