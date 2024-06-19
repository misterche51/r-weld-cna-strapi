"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { CATALOG_DB } from "@/api/db";

import { PageWrapper } from "../components/pageWrapper";
import { TTungstenElectrodesContent } from "@/api/catalog/chemistry/declarations";

const Content = ({image}: TTungstenElectrodesContent) => {
  const {src, alt, description} = image;
  return (
    <div className={styles.content}>
      <div className={styles.content__image}>
        <Image
          src={`/tungsten_electrodes/${src}`}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      <div className={styles.content__text}>{description}</div>
    </div>
  )
}
const Page = () => {
  const { label, description, image } =
  CATALOG_DB.chemistry.tungsten_electrodes;
  return (
    <PageWrapper title={label} description={description} content={<Content image={image}/>} />);
};
export default Page;
