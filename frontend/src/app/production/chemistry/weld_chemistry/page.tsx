"use client";

import styles from "./styles.module.css";
import { CATALOG_DB } from "@/api/db";
import Item from "./components/item/item";

import { TWeldChemistryItem } from "@/api/catalog/chemistry/declarations";
import {PageWrapper} from "../../../layout/pageWrapper";

const WeldChemistryCatalogList = ({list}: {list: TWeldChemistryItem[]}) => {
  return (
    <ul className={styles.list}>
      {list.map((data, i) => (
        <li key={i} className={styles.list__item}>
          {/* @ts-expect-error */}
          <Item {...data} />
        </li>
      ))}
    </ul>
    )
  }

const Page = () => {
  const { label, description, list } = CATALOG_DB.chemistry.weld_chemistry;
  return (
    <PageWrapper title={label} description={description} content={<WeldChemistryCatalogList list={list}/>} />);
};
export default Page;
