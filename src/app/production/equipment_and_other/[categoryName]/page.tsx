"use client";

import styles from "./styles.module.css";

import { Item } from "@/app/shared";

import {PageWrapper} from "../../../layout/pageWrapper";
import DB from "@/api/db";


const EquipmentAndOtherCategoryPage = ({
  params,
}: {
  params: {
    categoryName: string;
  };
}) => {
  // @ts-expect-error
  const { label, description, list } = DB.catalog.equipment[params.categoryName];
  const content = <ul className={styles.list}>
    
  {list.map(
      // @ts-expect-error
    ({name, image, info, target}, i) => (
    <li key={i} className={styles.list__item}>
      <Item name={name} image={`/${target}/${image.src}`} info={info} />
    </li>
  ))}
</ul>
  return (
    <PageWrapper title={label} description={description} content={content} />);
};
export default EquipmentAndOtherCategoryPage;
