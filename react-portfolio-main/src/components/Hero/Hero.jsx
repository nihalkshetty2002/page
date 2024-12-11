import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nihal Kiran Shetty</h1>
        <p className={styles.description}>
        I'm a full-stack developer with expertise in C++, Java, and Python. 
        I have hands-on experience in web development using HTML, CSS, JavaScript, and PHP, and am skilled with React basics and MySQL database management. 
        Additionally, I have built machine learning models for data classification tasks. 
        Let's connect to discuss how I can contribute to your next big idea!
        </p>
        <a href="mailto:nihalshetty54@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
