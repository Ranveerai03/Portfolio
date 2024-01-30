import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ranveer </h1>
        <p className={styles.description}>
          I am a skilled and motivated software engineer with a passion for
          developing innovative solutions. My expertise lies in Python, Java,
          and C++, and I thrive by working in teams and communicating
          effectively. With a strong foundation in computer science from The
          British Columbia Institute of Technology , I am dedicated to
          continuous learning and driving technological advancements.
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
