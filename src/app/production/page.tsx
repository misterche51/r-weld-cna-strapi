"use client";

import Layout from "../layout/layout";
import Container from "@/app/layout/container/container";
import ContactForm from "@/app/shared/contactForm/contactForm";
import styles from "./page.module.css";
import Heading from "../shared/heading/heading";
import { List } from "../components";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "../shared/breadcrumbs/breadcrumbs";
import { useEffect } from "react";

export default function ProductionPage() {
  useEffect(() => {
    if (window.location.pathname.endsWith('/')) {
      // Удаляем последний слэш и перенаправляем пользователя
      const newPath = window.location.pathname.slice(0, -1);
      window.location.replace(newPath);
  }
  }, [])
 
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
