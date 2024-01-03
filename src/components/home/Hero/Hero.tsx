import React from "react";
// import styles from "./Hero.module.css";
import styles from "./Hero.module.sass";

export const Hero = () => {
  console.log(styles);
  return (
    <section className={styles.Hero}>
      <h1>Hero Title</h1>
      <h2>Subtitle</h2>
    </section>
  );
};
