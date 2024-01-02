import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log("hello world");
  return (
    <main className={styles.main}>
      <h1>Hello Everybody</h1>
    </main>
  );
}
