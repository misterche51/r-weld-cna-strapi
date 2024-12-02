"use client";

import React from "react";

import styles from "./styles.module.css";
import CatalogItem from "@/app/shared/catalogItem/catalogItem";
import Link from "next/link";
import DB from "@/api/db";
import { PageWrapper } from "@/app/layout/pageWrapper";

const EquipmentMain = () => {
  const list = 
    <ul className={styles.list}>
      {/* @ts-expect-error */}
      {DB.catalog.equipment.map(({ label, image }, i) => (
        <li key={i} className={styles.item}>
          <Link href={`/`}>
            <CatalogItem label={label} image={image} />
          </Link>
        </li>
      ))}
    </ul>

  return <PageWrapper title='Оборудование и прочее' withUnderline content={list}/>;
};

export default EquipmentMain;
