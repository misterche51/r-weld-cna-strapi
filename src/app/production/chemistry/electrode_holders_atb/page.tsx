"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import DB from "@/api/db";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
import { PageWrapper } from "../../../layout/pageWrapper";

const Page = () => {
  const { header, data } =
    DB.catalog.chemistry.data.electrode_holders_atb;

  const {images} = data;
  const {label, description, list} = header;
  
  const sectionNames = Object.keys(images);
  
  const content = <>
      {sectionNames.map((name, i) => {
        const { title, alt, src } = images[name];
        return (
          <>
          {i === 0 && <ul className={styles.list}>
            {list.map((string:string , i:number) => <li key={i} className={styles.list__item}>{string}</li>)}
          </ul>}
          <ImageWrapper
            key={alt}
            title={title}
            image={
              <div
                className={`${styles.image} ${styles[`image--${name}`]}`}
              >
                <Image
                  className={styles.image__pic}
                  src={`/electrode_holders_atb/${src}`}
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
          </>
        );
      })}
  </>

  return (
    <PageWrapper title={label} description={description} content={content} />);

};
export default Page;
