import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import * as styles from "../styles/nav.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Linkedin, Twitter } from "react-bootstrap-icons";
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
            height: 45
            width: 45
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
        <h1 className="text-truncate">{section}</h1>
      </div>
      <div className={styles.nav}>
        <div>
          <Link to="/books">Books</Link>
        </div>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/nikhil-rustagi/" target="_blank">
          <span>
            <Linkedin color="royalblue" size={16} />
          </span>
          </a>          
        </div>
      </div>
    </nav>
  );
}
