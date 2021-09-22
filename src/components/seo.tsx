import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-react-intl";

interface Props {
  description: string;
  title: string;
  image?: string;
}

function SEO({ description, title, image }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            authorTwitter
            logo
          }
        }
      }
    `,
  );

  const intl = useIntl();
  const lang = intl.locale;
  const defaultSeoTitle = intl.formatMessage({
    id: "default.seoTitle",
    defaultMessage: "Reclaim your right to information",
  });

  const defaultSeoDescription = intl.formatMessage({
    id: "default.seoDescription",
    defaultMessage: "We are here to help you regain your right to information",
  });
  const metaDescription = description || defaultSeoDescription;
  const ogImage = image || site.siteMetadata.logo;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? title : defaultSeoTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.authorTwitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: ogImage,
        },
      ]}
    >
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}

export default SEO;
