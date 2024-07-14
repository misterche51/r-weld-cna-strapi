"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import DB from "@/api/db";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
import { PageWrapper } from "../../../layout/pageWrapper";

const Page = () => {
  const { header, data } =
    DB.catalog.chemistry.data.electrical_holders;

  const {images} = data;
  const {label, description} = header;
  
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
                  src={`/electrical_holders/${src}`}
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
      })}
  </>

  return (
    <PageWrapper title={label} description={description} content={content} />);

};
export default Page;
