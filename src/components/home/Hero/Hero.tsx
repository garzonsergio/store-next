import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  console.log(styles);
  return (
    <section className={styles.Hero}>
      <h2>Hero Title</h2>
      <h3>Subtitle</h3>
    </section>
  );
};
