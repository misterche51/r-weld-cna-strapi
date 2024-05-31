"use client";

import React from "react";
import styles from "./chemistry.module.css";
import ContactForm from "@/app/shared/contactForm/contactForm";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import CatalogItem from "@/app/shared/catalogItem/catalogItem";
import Link from "next/link";
import DB from "@/api/db";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "@/app/shared/breadcrumbs/breadcrumbs";

const ChemistryMain = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Layout>
      <Container>
        <div className={styles.wrapper}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Heading
            rank={2}
            text="Сварочная химия и аксессуары"
            withUnderline={false}
          />
          <ul className={styles.list}>
            {DB.catalog.chemistry.map(({ label, target, image }, i) => (
              <li key={i} className={styles.item}>
                <Link href={`/production/chemistry/${target}`}>
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

export default ChemistryMain;
