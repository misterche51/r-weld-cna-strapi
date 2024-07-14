"use client";

import styles from "./styles.module.css";
import DB from "@/api/db";
import { Item } from "@/app/shared";

import { PageWrapper } from "../../../layout/pageWrapper";

const Page = () => {
  const { header, data } = DB.catalog.chemistry.data.weld_chemistry;
  const {label, description} = header;

  const content = <ul className={styles.list}>
    {data.map(({name, image, info}, i) => (
    <li key={i} className={styles.list__item}>
      <Item name={name} image={`/weld_chemistry/${image.src}`} info={info} />
    </li>
  ))}
  </ul>
  
  return (
    <PageWrapper title={label} description={description} content={content} />);
};
export default Page;
