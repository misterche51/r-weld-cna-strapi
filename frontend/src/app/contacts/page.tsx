"use client";

import Layout from "../layout/layout";
import Container from "@/app/layout/container/container";
import { CONTACTS_PAGE_DB } from "@/api/contacts";
import ContactForm from "@/app/shared/contactForm/contactForm";
import styles from "./page.module.css";
import Heading from "../shared/heading/heading";
import Map from "./sections/map/map";
import Dealers from "./sections/dealers/dealers";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "../shared/breadcrumbs/breadcrumbs";
import Description from "../shared/description/description";
import { YMaps } from "@pbe/react-yandex-maps";

export default function ContactsPage() {
  const { contacts, dealers } = CONTACTS_PAGE_DB;
  const breadcrumbs = useBreadcrumbs();
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Container>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <section className={`${styles.section} ${styles["section--contacts"]}`}>
            <Heading rank={2} text={contacts.label} />
            {contacts.description && (
              <Description description={contacts.description} />
            )}
            <YMaps
              query={{
                lang: "ru_RU",
                apikey: "f53274b6-1526-4321-b720-ef990daaf377",
              }}
            >
              <Map />
            </YMaps>
          </section>
          <ContactForm />
          <section className={`${styles.section} ${styles["section--dealers"]}`}>
            <Heading rank={2} text={dealers.label} />
            <Dealers />
          </section>
        </Container>
      </div>
    </Layout>
  );
}
