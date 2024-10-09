// "use client";
import { PropsWithChildren } from "react";
import Image from "next/image";
import styles from "./firstScreen.module.css";

const DATA = {
  title: "«R-Weld»",
  description: "Российский производитель горелок для MIG и TIG сварки",
};

export default function FirstScreen({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        src={`/main.jpg`}
        alt="Картинка с первого экрана"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className={styles.content}>
        {/* <h1 className={styles.title}>{DATA.title}</h1> */}
        <div className={styles.big_logo}>
          <Image
            src={`/white_big_logo.svg`}
            alt="R-WELD"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        
        <p className={styles.description}>{DATA.description}</p>
      </div>
    </div>
  );
}
