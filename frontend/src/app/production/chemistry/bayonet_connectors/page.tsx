// "use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import ContactForm from "@/app/shared/contactForm/contactForm";
import { CHEMISTRY_DB } from "@/api/db";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
import Description from "@/app/shared/description/description";

const Page = () => {
  const { label, description, data } = CHEMISTRY_DB.bayonet_connectors;
  const { technical_info, systems } = data;
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.inner}>
            <Heading rank={2} text={label} withUnderline={true} />
            {description && <Description description={description} />}
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
            <div className={styles.form}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};
export default Page;
