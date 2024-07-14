"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
import { PageWrapper } from "../../../layout/pageWrapper";
import DB from "@/api/db";

const Page = () => {
  const {header, data } = DB.catalog.chemistry.data.carbon_electrodes;

  const {label, description} = header;
  const {images} = data;

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
