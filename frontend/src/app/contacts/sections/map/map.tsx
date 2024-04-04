"use client";
import Controls from "./components/controls/controls";
import Info from "./components/info/info";
import { useState } from "react";
import DB from "@/api/db";
import styles from "./map.module.css";
export default function Map() {
  const [activeId, setActiveId] = useState<number>(0);
  const options = DB.contacts.map(({ id, city }) => ({
    id,
    label: city,
  }));
  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <Controls
          options={options}
          activeId={activeId}
          onChangeHandler={setActiveId}
        />
      </div>
      <div className={styles.info}>
        <Info id={activeId} />
      </div>
      <div className={styles.map}></div>
    </div>
  );
}
