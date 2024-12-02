"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Heading from "@/app/shared/heading/heading";
import { CATALOG_DB } from "@/api/db";
import { PageWrapper } from "../../../layout/pageWrapper";

const Page = () => {
  const { label, description, data } = CATALOG_DB.chemistry.bayonet_connectors;
  const { technical_info, systems } = data;
  
  const content = 
    <>
    <section className={styles.technical_info}>
              <Heading
                rank={2}
                text={technical_info.title}
                withUnderline={false}
              />
              <div className={styles.technical_info__content}>
                <div className={styles.technical_info__image}>
                  <Image
                    src={`/bayonet_connectors/${technical_info.image.src}`}
                    alt={technical_info.image.alt}
                    width={628}
                    height={360}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    priority
                  />
                </div>
                <div className={styles.technical_info__table}>
                  <p className={styles.technical_info__heading}>
                    {technical_info.table.heading}
                  </p>
                  <ul className={styles.technical_info__list}>
                    {technical_info.table.rows.map((data, i) => (
                      <li key={i} className={styles.technical_info__item}>
                        {data}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
    </section>
    <section className={styles.systems}>
      <Heading rank={2} text={systems.title} withUnderline={true} />
      <div className={styles.systems__inner}>
        {systems.sections.map((data, i) => (
          <div key={i} className={styles.systems__section}>
            <div className={styles.systems__data}>
              {data.tables.map((table, i) => (
                <div key={i} className={styles.systems__table}>
                  <p className={styles.systems__table_heading}>
                    {table.heading}
                  </p>
                  <ul className={styles.systems__table_list}>
                    {table.rows.map(({ label, number }, i) => (
                      <li
                        key={i}
                        className={styles.systems__table_item}
                      >
                        <span>{label}</span>
                        <span>{number}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.systems__image}>
              <Image
                src={`/bayonet_connectors/${data.image.src}`}
                alt={data.image.alt}
                width={628}
                height={628}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  return (
    <PageWrapper title={label} description={description} content={content} />);
};
export default Page;
