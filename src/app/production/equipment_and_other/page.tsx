"use client";

import React from "react";

import styles from "./styles.module.css";
import CatalogItem from "@/app/shared/catalogItem/catalogItem";
import Link from "next/link";
import DB from "@/api/db";
import { PageWrapper } from "@/app/layout/pageWrapper";

const EquipmentMain = () => {
  // @ts-expect-error
  const catalogData = Object.values(DB.catalog.equipment);

  const list = 
    <ul className={styles.list}>
      {/* @ts-expect-error */}
      {catalogData.map(({ label, target, category_image }, i) => (
        <li key={i} className={styles.item}>
          <Link href={`./equipment_and_other/${[target]}`}>
            <CatalogItem label={label} image={category_image} />
          </Link>
        </li>
      ))}
    </ul>

  return <PageWrapper title='Оборудование и прочее' withUnderline content={list}/>;
};

export default EquipmentMain;
