"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import DB from "@/api/db";

import { PageWrapper } from "../../../layout/pageWrapper";

const Page = () => {
  const { data, header } = DB.catalog.chemistry.data.tungsten_electrodes;
  const {label, description} = header;
  const { image }= data

  const content = <div className={styles.content}>
  <div className={styles.content__image}>
    <Image
      src={`/tungsten_electrodes/${image.src}`}
      alt={image.alt}
      fill
      style={{ objectFit: "contain" }}
      priority
    />
  </div>
  <div className={styles.content__text}>{image.description}</div>
</div>

  return (
    <PageWrapper title={label} description={description} content={content} />);
};
export default Page;
