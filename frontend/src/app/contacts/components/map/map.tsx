"use client";
import Controls from "./components/controls/controls";
import Content from "./components/content/content";
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
      <Controls
        options={options}
        activeId={activeId}
        onChangeHandler={setActiveId}
      />
      <Content id={activeId} />
    </div>
  );
}
