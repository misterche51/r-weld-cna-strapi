"use client";

import React from "react";

import styles from "./styles.module.css";

import ContactForm from "@/app/shared/contactForm/contactForm";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import CatalogItem from "@/app/shared/catalogItem/catalogItem";
import Link from "next/link";
import DB from "@/api/db";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "@/app/shared/breadcrumbs/breadcrumbs";

const EquipmentMain = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Layout>
      <Container>
        <div className={styles.wrapper}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Heading rank={2} text="Оборудование и прочее" withUnderline={true} />
          <ul className={styles.list}>
            {/* @ts-expect-error */}
            {DB.catalog.equipment.map(({ label, image }, i) => (
              <li key={i} className={styles.item}>
                <Link href={`/`}>
                  <CatalogItem label={label} image={image} />
                </Link>
              </li>
            ))}
          </ul>
          <ContactForm />
        </div>
      </Container>
    </Layout>
  );
};

export default EquipmentMain;
