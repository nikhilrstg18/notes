import * as React from "react";
import Site from "../layouts/site";
import * as styles from "../styles/home.module.css";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  const { description, title, welcome } = data.site.siteMetadata;
  const image = getImage(data.file.childImageSharp);
  return (
    <Site>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{welcome}</h1>
          <hr />
          <h2>
            <Link to="books">
              {title} {description} 👉 📚
            </Link>
          </h2>
        </div>
        <GatsbyImage
          image={image}
          imgClassName={styles.banner}
          objectFit="contain"
          alt="banner"
        />
      </div>
    </Site>
  );
};

export const query = graphql`
  query HomeInfo {
    site {
      siteMetadata {
        description
        title
        welcome
      }
    }
    file(relativePath: { eq: "logo_512.png" }) {
      id
      childImageSharp {
        gatsbyImageData(height: 256, width: 256, aspectRatio: 1)
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
