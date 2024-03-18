// "use client";
import { PropsWithChildren } from "react";
import styles from "./branches.module.css";
import Container from "@/app/layout/container/container";
import SectionTitle from "../sectionTitle/sectionTitle";
import ContactForm from "../contactForm/contactForm";

export default function Branches({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <SectionTitle variant="black" text="Филиалы и склады" />
        <ContactForm />
      </Container>
    </div>
  );
}
