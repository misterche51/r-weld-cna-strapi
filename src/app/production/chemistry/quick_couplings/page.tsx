"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import DB from "@/api/db";
import { PageWrapper } from "../../../layout/pageWrapper";

const Page = () => {
  const { data, header } = DB.catalog.chemistry.data.quick_couplings;
  const {label, description} = header;
  const {images} = data;
  const tables = Object.values(images);
  
  const content = <div className={styles.content}>
  {tables.map(({ src, alt }, i) => (
    <div key={i} className={styles.image}>
      <Image
        className={styles.image__pic}
        src={`/quick_couplings/${src}`}
        alt={alt}
        width={628}
        height={1331}
        priority
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  ))}
</div>
  return (
    <PageWrapper title={label} description={description} content={content} />);

};
export default Page;
