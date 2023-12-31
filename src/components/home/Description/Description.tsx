"use client";
import Image from "next/image";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Description.module.sass";

const PLACEHOLDER_URL =
  "data:image/jpeg;base64,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";

// https://blurred.dev/

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => setHasBorder((e) => !e);

  const cx = classNames.bind(styles);

  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder,
  });

  const buttonStyles2 = hasBorder
    ? styles.Description__buttonActived
    : styles.Description__button;


  return (
    <section className={styles.Description}>
      {/* Image carga imagenes con lazyloading por defecto */}
      <button
        onClick={handleClick}
        className={buttonStyles}
      >
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.png"
            alt="products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_URL}

            // priority={false} esto desactiva el lazyloading
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Description</h2>
        <p>
          Future World: Your Gateway to Tomorrow's Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
