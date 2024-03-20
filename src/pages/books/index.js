import { graphql, Link } from "gatsby";
import React from "react";
import Site from "../../layouts/site";
import * as styles from "../../styles/books.module.css";

export default function BooksPage({data}) {
  const bookColors = [
    {
      color:[
        styles.bookCover,
        styles.yellow,
      ].join(" ")
    },
    {
      color:[
        styles.bookCover,
        styles.purple,
      ].join(" ")
    },
    {
      color:[
        styles.bookCover,
        styles.blue,
      ].join(" ")
    },
    {
      color:[
        styles.bookCover
      ].join(" ")
    },
    {
      color:[
        styles.bookCover,
        styles.green,
      ].join(" ")
    },
  ];

  const books = data?.allMarkdownRemark?.nodes?.filter(x=>!x?.parent?.relativeDirectory?.includes("/"));
  return (
    <Site>
      <section>
        <div className={styles.books}>
          { books?.length === 0
          ?<p>No Books Written</p>
          :books?.map((book) => {
            const { slug, title, stack } = book.frontmatter;
            return (
              <Link to={slug} title={title} key={book.id}>
                <div className={styles.bookWrapper}>
                  <div className={styles.book}>
                    <div className={bookColors
                  [(Math.floor(Math.random() * bookColors
                  ?.length))]?.color}>
                      <div className={styles.bookSkin}>{stack}</div>
                    </div>
                    <div
                      className={[styles.bookPage, styles.ruled].join(
                        " "
                      )}></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </Site>
  );
}

export const query = graphql`
  query BooksInfo {
    allMarkdownRemark(filter: {parent: {}}, sort: {frontmatter: {stack: ASC}}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          next
          prev
        }
        id
        parent {
          ... on File {
            relativeDirectory
          }
        }
      }
    }
  }
`
