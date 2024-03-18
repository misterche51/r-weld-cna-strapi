import Image from "next/image";
import styles from "./page.module.css";
import Advantages from "./components/advantages/Advantages";

export default function Home() {
  return (
    <main className={styles.main}>
      <Advantages />
    </main>
  );
}
