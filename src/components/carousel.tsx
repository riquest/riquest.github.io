import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-react-intl";

function ControlledCarousel({ className }: { className?: string }) {
  const intl = useIntl();

  const query = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 4600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Carousel className={className} interval={8000}>
      <Carousel.Item>
        <Img fluid={query.allFile.edges[0].node.childImageSharp.fluid} />
        <Carousel.Caption>
          <h4 className="caption-title">
            {intl.formatMessage({ id: "carousel.slide1.title", defaultMessage: "Nous sommes" })}
          </h4>
          <p className="caption-description">
            {intl.formatMessage({
              id: "carousel.slide1.description",
              defaultMessage:
                "Riquest est une association loi 1901 qui promeut le droit à l'information & la liberté d'expression par le contentieux collaboratif et stratégique.",
            })}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={query.allFile.edges[1].node.childImageSharp.fluid} />
        <Carousel.Caption>
          <h4 className="caption-title">
            {intl.formatMessage({ id: "carousel.slide2.title", defaultMessage: "Nous proposons" })}
          </h4>
          <p className="caption-description">
            {intl.formatMessage({
              id: "carousel.slide2.description",
              defaultMessage:
                "Un soutien juridique, collaboratif et stratégique auprès d’activistes, de journalistes et d'ONGs afin de promouvoir la liberté de l'information dans le contexte de l’opacité croissante entourant l’action privée et publique.",
            })}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img fluid={query.allFile.edges[2].node.childImageSharp.fluid} />
        <Carousel.Caption>
          <h4 className="caption-title">
            {intl.formatMessage({ id: "carousel.slide3.title", defaultMessage: "Nos projets" })}
          </h4>
          <p className="caption-description">
            {intl.formatMessage({
              id: "carousel.slide3.description",
              defaultMessage:
                "Visent à réduire l’opacité disproportionnée de l’action publique et privée lorsqu’elle limite le débat public sur des sujets d’intérêt général ou l’accès à la justice de victimes de violations de droits humains.",
            })}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default styled(ControlledCarousel)`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50.3vw;
  margin-right: -50vw;

  .carousel.pointer-event {
    touch-action: pan-y;
  }

  .carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .carousel-item {
    position: relative;
    display: none;
    float: left;
    width: 100%;
    margin-right: -100%;
    backface-visibility: hidden;
    transition: transform 0.6s ease-in-out;
  }

  .carousel-item.active,
  .carousel-item-next,
  .carousel-item-prev {
    display: block;
  }

  .carousel-item-next:not(.carousel-item-left),
  .active.carousel-item-right {
    transform: translateX(100%);
  }

  .carousel-item-prev:not(.carousel-item-right),
  .active.carousel-item-left {
    transform: translateX(-100%);
  }

  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    color: var(--text-primary);
    text-align: center;
    opacity: 0.5;
    transition: opacity 0.15s ease;
  }
  .carousel-control-prev {
    left: 0;
  }
  .carousel-control-next {
    right: 0;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: no-repeat 50% / 100% 100%;
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
  }
  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
  }

  .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;

    li {
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 3px;
      margin-right: 3px;
      margin-left: 3px;
      text-indent: -999px;
      cursor: pointer;
      background-color: var(--backgroundColor);
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: 0.5;
      transition: opacity 0.6s ease;
    }

    .active {
      opacity: 1;
    }
  }

  .carousel-caption {
    position: absolute;
    top: 15%;
    right: 15%;
    z-index: 10;
    max-width: 50%;
    padding: 20px;
    color: var(--textPrimary);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  .carousel-control-next:focus,
  .carousel-control-next:hover,
  .carousel-control-prev:focus,
  .carousel-control-prev:hover {
    color: var(--backgroundColor);
    text-decoration: none;
    outline: 0;
    opacity: 0.9;
  }

  .caption-title {
    background-color: var(--backgroundColor);
    display: initial;
    padding: 10px;
  }

  .caption-description {
    margin-top: 1rem;
    font-size: 1.6rem;
    background-color: var(--backgroundColor);
    padding: 10px;
  }
`;
