// import { getStaticProps } from "next/dist/build/templates/pages";
import Layout from "../layout/layout";
import Container from "@/app/layout/container/container";
import DB from "@/api/db";
import ContactForm from "@/app/shared/contactForm/contactForm";
import styles from "./page.module.css";
import Heading from "../shared/heading/heading";
import { List } from "../components";

export default function ContactsPage() {
  return (
    <Layout>
      <Container>
        <section className={styles.wrapper}>
          <Heading rank={2} text="Продукция" withUnderline={false} />
          <List />
          <ContactForm />
        </section>
      </Container>
    </Layout>
  );
}
