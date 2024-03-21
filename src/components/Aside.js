import React from "react";
import { Link } from "gatsby";
import * as styles from '../styles/aside.module.css';

export default function Aside({ sideMenu }) {
  
  return (
    <aside>
      <p className={styles.home}><Link to="../">👈</Link></p>
      {sideMenu?.map((sm) => (
        <div className={styles.section}>
            <ul>
              {sm.menu?.map((m) => (
                <li>
                  <Link to={m?.name}>{m?.name}</Link>
                </li>
              ))}
            </ul>
        </div>
      ))}
    </aside>
  );
}
