import styles from "./Description.module.sass";
import Image from "next/image";

export const Description = () => {
  return (
    <section className={styles.Description}>
      {/* Image carga imagenes con lazyloading por defecto */}
      <Image
        src="/images/description.png"
        alt="products marketplace"
        width={500} //siempre es necesario establecer un ancho con Image
        height={300}
        // priority={false} esto desactiva el lazyloading
      />
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
