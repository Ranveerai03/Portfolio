import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ranveer </h1>
        <p className={styles.description}>
          I am a motivated software engineer with a passion for developing innovative solutions. 
          My passions are testing and programming; I enjoy solving problems, 
          and can perform well working alone or in teams. I am a quick learner who can adapt my communication style to meet the needs of any group, 
          and I love a challenge. I'm dedicated to continuous learning and having fun while coding.
        </p>

        <a href="mailto:ranveerrai@yahoo.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/moon.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
