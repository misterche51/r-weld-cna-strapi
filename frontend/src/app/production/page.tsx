"use client";

import Layout from "../layout/layout";
import Container from "@/app/layout/container/container";
import ContactForm from "@/app/shared/contactForm/contactForm";
import styles from "./page.module.css";
import Heading from "../shared/heading/heading";
import { List } from "../components";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "../shared/breadcrumbs/breadcrumbs";

export default function ProductionPage() {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Layout>
      <Container>
        <section className={styles.wrapper}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Heading rank={2} text="Продукция" withUnderline={false} />
          <List />
          <ContactForm />
        </section>
      </Container>
    </Layout>
  );
}
