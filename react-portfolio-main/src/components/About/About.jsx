import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      {/* Title */}
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* About Image */}
        <img
          src={getImageUrl("about/hero.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        {/* About Items */}
        <ul className={styles.aboutItems}>
          {/* Frontend Developer */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized websites.
              </p>
            </div>
          </li>

          {/* Backend Developer */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and efficient back-end systems
                and APIs.
              </p>
            </div>
          </li>

          {/* UI Designer */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and created scalable
                design systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
