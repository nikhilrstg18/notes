import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import * as styles from "../styles/nav.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Nav({ section }) {
  const data = useStaticQuery(graphql`
    query NavbarInfo {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "logo_192.png" }) {
        id
        childImageSharp {
          gatsbyImageData(
            blurredOptions: { width: 10 }
            layout: FIXED
            placeholder: BLURRED
            height: 50
            width: 50
          )
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;
  const logo = getImage(data.file.childImageSharp);

  return (
    <nav className={styles.navBar}>
      <div className={styles.brand}>
        <Link to="/">
          <GatsbyImage image={logo} objectFit="contain" alt="logo" />
        </Link>
        <h1>{section}</h1>
      </div>
      <div className={styles.nav}>
        <div>
          <Link to="/books">Books</Link>
        </div>
        <div> | {title} | </div>
        <div>Social Icons ...</div>
      </div>
    </nav>
  );
}
