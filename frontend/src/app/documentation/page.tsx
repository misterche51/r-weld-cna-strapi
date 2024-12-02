"use client";

import DB from "@/api/db";
import styles from "./page.module.css";
import Link from "next/link";
import { PageWrapper } from "../layout/pageWrapper";
import { useState } from "react";


const DocumentationList = () => {
  const [isListExpanded, setIsListExpanded] = useState(false);
  const onShowMoreBtnClickHandler = () => {
    setIsListExpanded(val => !val)
  }


  return (
    <div className={styles.content}>
      <ul className={`${styles.list} ${isListExpanded ? styles["list--opened"] : ''}`}>
        {DB.downloads.map(({label ,id, path}) => 
          <li key={id} className={styles.item}>
            <div className={styles.image}></div>
            <p className={styles.label}>{label}</p>
            <Link className={styles.link} href={`${path}`} rel="noopener noreferrer" target="_blank">Скачать</Link>
          </li>
      )}
    </ul>
    <button className={styles.showMoreBtn} onClick={onShowMoreBtnClickHandler}>{isListExpanded ? 'Свернуть' : 'Показать еще'  }</button>
  </div>)
}

export default function DocumentationPage() {
  return <PageWrapper title='Документация' withUnderline content={<DocumentationList />} />
} 
