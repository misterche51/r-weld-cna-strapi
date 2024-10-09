"use client";

import React from "react";
import { PageWrapper } from "../../layout/pageWrapper";
import styles from "./chemistry.module.css";
import CatalogItem from "@/app/shared/catalogItem/catalogItem";
import Link from "next/link";
import DB from "@/api/db";


const ChemistryMain = () => {
  const categoies = Object.values(DB.catalog.chemistry.data);
  const list = <ul className={styles.list}>
    {categoies.map(({ routing }, i) => (
      <li key={i} className={styles.item}>
        <Link href={`/production/chemistry/${routing.target}`}>
          <CatalogItem label={routing.label} image={routing.image} imageStyle={[2,5].includes(i)?'cover':'contain'}/>
        </Link>
      </li>
    ))}
  </ul>

  return <PageWrapper title='Сварочная химия и аксессуары' content={list}/>
};

export default ChemistryMain;
