import Image from "next/image";
import styles from "./page.module.css";
import Advantages from "./components/advantages/advantages";
import About from "./components/about/about";
export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Advantages />
    </main>
  );
}
