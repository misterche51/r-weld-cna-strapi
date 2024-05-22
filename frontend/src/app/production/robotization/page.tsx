import React from "react";

import styles from "./robotization.module.css";

import ContactForm from "@/app/shared/contactForm/contactForm";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Image from "next/image";
import Heading from "@/app/shared/heading/heading";

import { CATALOG_DB } from "@/api/db";

const RobotizationMain = () => {
  const { label, content } = CATALOG_DB.robotization;
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.inner}>
            <Heading
              rank={2}
              text={label}
              withUnderline={true}
              variant="light"
            />
            <section className={styles.content}>
              <p className={styles.text}>{content}</p>
            </section>
            <div className={styles.form}>
              <ContactForm variant="light" />
            </div>
          </div>
        </Container>
        <div className={styles.image}>
          <Image
            src={"/robotization_big.jpg"}
            alt="элекментик"
            width={1920}
            height={1590}
            style={{
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </div>
      </div>
    </Layout>
  );
};

export default RobotizationMain;
