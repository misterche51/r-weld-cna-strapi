// import { getStaticProps } from "next/dist/build/templates/pages";
import Layout from "../layout/layout";
import Container from "@/app/layout/container/container";
import DB from "@/api/db";
import ContactForm from "@/app/shared/contactForm/contactForm";
import styles from "./page.module.css";
import Heading from "../shared/heading/heading";
import Controls from "./components/map/components/controls/controls";
import Content from "./components/map/components/content/content";
import Map from "./components/map/map";

export default function ContactsPage() {
  return (
    <Layout>
      <Container>
        <section className={styles.seciton}>
          <Heading text="Контакты" />
          <p className={styles.description}>
            Наличие филиалов и собственных складов в Москве, Санкт-Петербурге,
            Екатеринбурге, Красноярске и Рязани, а так же обширная дилерская
            сеть позволяют создать индивидуальные условия доставки и оплаты
            для каждого клиента.
          </p>
          <Map />
          <ContactForm />
        </section>

        <Heading text="Дилеры" />
      </Container>
    </Layout>
  );
}
