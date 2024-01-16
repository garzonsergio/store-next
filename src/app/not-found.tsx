import Image from "next/image";
import Link from "next/link";
import styles from "app/sass/not-found.module.sass";

export default function NotFound() {
  return (
    <main className={styles.NotFound}>
      <h1 className={styles.NotFound__title}>404</h1>
      <Image src="/images/404.png" alt="Error" width={300} height={300} />
      <h2 className={styles.NotFound__subtitle}>
        Parece que estas ingresando a un enlace perdido
      </h2>
      <p className={styles.NotFound__description}>
        Mira las mejores ofertas en nuestra tienda
      </p>
      <Link className={styles.NotFound__link} href="/store">
        Vamos de compras!
      </Link>
    </main>
  );
}
