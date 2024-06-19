"use client";

import React from "react";
import styles from "./chemistry.module.css";
import CatalogItem from "@/app/shared/catalogItem/catalogItem";
import Link from "next/link";
import DB from "@/api/db";


import { PageWrapper } from "../../layout/pageWrapper";

const ChemistryMain = () => {
  const list = <ul className={styles.list}>
    {DB.catalog.chemistry.map(({ label, target, image }, i) => (
      <li key={i} className={styles.item}>
        <Link href={`/production/chemistry/${target}`}>
          <CatalogItem label={label} image={image} />
        </Link>
      </li>
    ))}
  </ul>

  return <PageWrapper title='Сварочная химия и аксессуары' content={list}/>
};

export default ChemistryMain;
