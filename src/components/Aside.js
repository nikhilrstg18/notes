import React from "react";
import { Link } from "gatsby";
import * as styles from '../styles/aside.module.css';

export default function Aside({ sideMenu }) {
  function titleCase(str) {
    if (str == "c") {
      str = "c#";
    }
    // Split the string by underscores
    let words = str.split("_");

    // Capitalize the first letter of each word
    let capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the words back together with spaces
    let titleCaseString = capitalizedWords.join(" ");

    return titleCaseString;
  }
  return (
    <aside>
      <p className={styles.home}><Link to="../">👈</Link></p>
      {sideMenu?.map((sm) => (
        <div className={styles.section}>
            <ul>
              {sm.menu?.map((m) => (
                <li>
                  <Link to={m?.name}>{titleCase(m?.name)}</Link>
                </li>
              ))}
            </ul>
        </div>
      ))}
    </aside>
  );
}
