import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import NewsItems from "../components/item-news";
import SEO from "../components/seo";
import { useIntl } from "gatsby-plugin-react-intl";
import Title from "../components/Title";

function NewsList({ data }: any) {
  const query = data;
  const intl = useIntl();

  if (query.allMarkdownRemark.edges.length > 0) {
    return (
      <section id="blog" className="container">
        <Title
          text={intl.formatMessage({
            id: "news.title",
            defaultMessage: "Actualités",
          })}
        />
        <div className="text-primary">
          {intl.formatMessage(
            {
              id: "about.news.intro",
              defaultMessage:
                "Riquest et ses membres publient ici régulièrement des documents d'orientation ou des études sur les lacunes de la législation française actuelle, au moyen d'analyses juridiques comparées et d'entretiens avec des praticiens. ",
            },
            { br: <br /> },
          )}
        </div>
        <NewsItems data={query} />
      </section>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
}

const NewsListComp = ({ data }: any): JSX.Element => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "news.titleSeo", defaultMessage: "Actu" })}
        description={intl.formatMessage({ id: "news.descriptionSeo", defaultMessage: "Actu" })}
      />
      <NewsList data={data} />
    </Layout>
  );
};

export const query = graphql`
  query blogListPage($searchPath: String) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $searchPath } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
            url
            # image {
            #   publicURL
            #   childImageSharp {
            #     fluid(maxWidth: 1920) {
            #       srcSet
            #       ...GatsbyImageSharpFluid
            #     }
            #     id
            #   }
            # }
          }
        }
      }
    }
  }
`;

export default NewsListComp;
