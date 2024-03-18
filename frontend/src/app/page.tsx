import Image from "next/image";
import styles from "./page.module.css";
import Advantages from "./components/advantages/advantages";
import About from "./components/about/about";
import Branches from "./components/branches/branches";

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Advantages />
      <Branches />
    </main>
  );
}
