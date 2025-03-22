import React, { useEffect, useState, useContext } from "react";
import {ThemeContext}  from "gatsby-plugin-theme-switcher";
import * as styles from "../styles/toggle.module.css";

export default function Toggle() {
    const { theme, switchTheme } = useContext(ThemeContext)
    const [isLoading, setIsLoading] = useState(true)
    const [isDarkMode, setDarkMode] = useState(theme === "theme-dark")
    const themeSelected = isDarkMode ? "theme-dark" : "theme-light"
    useEffect(() => {
        setIsLoading(false)
      })(() => {
        switchTheme(themeSelected)
      }, [isDarkMode])
    
      const toggleDarkMode = () => {
        setDarkMode(!isDarkMode)
      }
    
      if (isLoading) {
        return null
      }

  return (
    <div className={styles.toggle}>
      <label htmlFor="dark-mode-toggle">
        <input
          className={isDarkMode}
          type="checkbox"
          name="dark-toggle"
          onChange={toggleDarkMode}
          id="dark-mode-toggle"
        />
        <div className={styles.toggle__knob} />
        <div className={styles.toggle__bg} />
      </label>
    </div>
  );
}
