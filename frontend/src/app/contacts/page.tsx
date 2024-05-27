"use client";

import Layout from "../layout/layout";
import Container from "@/app/layout/container/container";
import DB from "@/api/db";
import ContactForm from "@/app/shared/contactForm/contactForm";
import styles from "./page.module.css";
import Heading from "../shared/heading/heading";
import Map from "./sections/map/map";
import Dealers from "./sections/dealers/dealers";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "../shared/breadcrumbs/breadcrumbs";

export default function ContactsPage() {
  const breadcrumbs = useBreadcrumbs(true);
  return (
    <Layout>
      <Container>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <section className={`${styles.section} ${styles["section--contacts"]}`}>
          <Heading text="Контакты" />
          <p className={styles.description}>
            Наличие филиалов и собственных складов в Москве, Санкт-Петербурге,
            Екатеринбурге, Красноярске и Рязани, а так же обширная дилерская
            сеть позволяют создать индивидуальные условия доставки и оплаты
            для каждого клиента.
          </p>
          <Map />
        </section>
        <ContactForm />
        <section className={`${styles.section} ${styles["section--dealers"]}`}>
          <Heading text="Дилеры" />
          <Dealers />
        </section>
      </Container>
    </Layout>
  );
}
