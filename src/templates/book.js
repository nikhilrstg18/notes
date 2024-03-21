import { graphql, Link } from "gatsby";
import React from "react";
import Notebook from "../layouts/Notebook";
import * as styles from "./../styles/book.module.css";

export default function Book({ data }) {
  const { html, frontmatter, tableOfContents, timeToRead } =
    data.markdownRemark;
  const { title, stack, next, prev, slug } = frontmatter;
  const sideMenu = customSort(data?.allDirectory?.edges?.map((x) => x.node));
  function customSort(words) {
    const order = [
      "fundamentals",
      "beginner",
      "intermediate",
      "advance",
      "export",
    ];

    // Create a map to store the indices of words in the order array
    const wordIndexMap = {};
    order.forEach((word, index) => {
      wordIndexMap[word] = index;
    });

    // Custom sorting function
    words.sort((a, b) => {
      return wordIndexMap[a.name] - wordIndexMap[b.name];
    });

    return words;
  }
  function toSectionMenu(input) {
    const output = [];

    // Create an object to store sections
    const sections = {};

    // Group elements by relativeDirectory
    input.forEach((item) => {
      const section = item.relativeDirectory;
      if (!sections[section]) {
        sections[section] = [];
      }
      sections[section].push({
        id: item.id,
        name: item.name,
      });
    });

    // Convert grouped sections into desired output format
    for (const section in sections) {
      output.push({
        section: section,
        menu: sections[section],
      });
    }

    return output;
  }

  const sectionMenu = toSectionMenu(sideMenu);

  return (
    <Notebook content={tableOfContents} sideMenu={sectionMenu}>
      <div className={styles.container}>
        <div className={styles.book}>
          <h1>{title}</h1>
          <cite>
            {stack} - <span>{timeToRead}</span>min&nbsp;read
          </cite>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div className={styles.np}>
            {prev ? (
              <Link to={prev} title="Prev">
                👈
              </Link>
            ) : (
              ""
            )}
            {next ? (
              <Link to={next} title="Next">
                👉
              </Link>
            ) : (
              ""
            )}
          </div>
          <footer className={styles.footer}>
            Written by <em>Nikhil Rustagi</em> | ©{" "}
            {new Date(Date.now()).getFullYear()} built with{" "}
            <img src="/icon.png" alt="gatsby" />
          </footer>
        </div>
        <div>
          <div className={styles.tableOfContent}>
            <h4>Table of Content</h4>
            <div dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
          </div>
        </div>
      </div>
    </Notebook>
  );
}
export const query = graphql`
  query BookInfo($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        stack
        title
        next
        prev
      }
      id
      tableOfContents(maxDepth: 6)
      timeToRead
    }
    allDirectory(
      filter: {
        sourceInstanceName: { eq: "books" }
        relativeDirectory: { eq: $slug }
      }
    ) {
      edges {
        node {
          id
          name
          relativeDirectory
        }
      }
    }
  }
`;
