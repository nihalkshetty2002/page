import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nihalshetty54@gmail.com">nihalshetty54@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/nihal-kiran-shetty-79691726a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/nihal-kiran-shetty
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/nihalkshetty2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/nihalkshetty2002
          </a>
        </li>
      </ul>
    </footer>
  );
};
