"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { CATALOG_DB } from "@/api/db";
import ImageWrapper from "../components/imageWrapper/imageWrapper";

import { PageWrapper } from "../../../layout/pageWrapper";

const Page = () => {
  const { label, description, images } = CATALOG_DB.chemistry.planers;
  const sectionNames = Object.keys(images);

  const content = <>
    {sectionNames.map((name) => {
      const { title, alt, src } = images[name];
      return (
        <ImageWrapper
          key={alt}
          title={title}
          image={
            <div
              className={`${styles.image} ${styles[`image--${name}`]}`}
            >
              <Image
                className={styles.image__pic}
                src={`/planers/${src}`}
                alt={alt}
                width={1276}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>
          }
        />
      );
  })}</>

  return (
    <PageWrapper title={label} description={description} content={content} />
  );
};
export default Page;
