"use client";

import React from "react";

import styles from "./robotization.module.css";

import ContactForm from "@/app/shared/contactForm/contactForm";
import Breadcrumbs from "@/app/shared/breadcrumbs/breadcrumbs";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Image from "next/image";
import Heading from "@/app/shared/heading/heading";
import DB from "@/api/db";

import useBreadcrumbs from "@/utils/useBreadcrumbs";

const RobotizationMain = () => {
  const { label, content } = DB.catalog.robotization.data;
  const breadcrumbs = useBreadcrumbs();
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.inner}>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
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
