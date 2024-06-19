"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { CATALOG_DB } from "@/api/db";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
import { PageWrapper } from "../components/pageWrapper";

const Page = () => {
  const { label, description, images } = CATALOG_DB.chemistry.carbon_electrodes;
  const sectionNames = Object.keys(images);
  const content = <>{sectionNames.map((name) => {
    const { title, alt, src } = images[name];
    return (
      <ImageWrapper
        title={title}
        key={alt}
        image={
          <div
            className={`${styles.image} ${styles[`image--${name}`]}`}
          >
            <Image
              className={styles.image__pic}
              src={`/carbon_electrodes/${src}`}
              alt={alt}
              width={1276}
              height={300}
              priority
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        }
      />
    );
  })}</>

  return <PageWrapper title={label} description={description} content={content}/>
};
export default Page;
