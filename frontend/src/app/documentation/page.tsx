"use client";

import Layout from "../layout/layout";
import Container from "@/app/layout/container/container";
import DB from "@/api/db";
import ContactForm from "@/app/shared/contactForm/contactForm";
import styles from "./page.module.css";
import Heading from "../shared/heading/heading";
import Link from "next/link";

import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "../shared/breadcrumbs/breadcrumbs";

export default function DocumentationPage() {
  const breadcrumbs = useBreadcrumbs(true);
  return (
    <Layout>
      <Container>
        <section className={styles.wrapper}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Heading rank={2} text="Документация" withUnderline={false} />
          <ul className={styles.list}>
            {DB.downloads.map(({label ,id, path}) => 
              <li key={id} className={styles.item}>
                <Link className={styles.link} href={`${path}`} rel="noopener noreferrer" target="_blank">{label}</Link>
              </li>
          )}
          </ul>
          <ContactForm />
        </section>
      </Container>
    </Layout>
  );
}
