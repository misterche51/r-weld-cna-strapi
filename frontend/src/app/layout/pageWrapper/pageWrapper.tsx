"use client";

import styles from "./pageWrapper.module.css";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import ContactForm from "@/app/shared/contactForm/contactForm";
import Description from "@/app/shared/description/description";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "@/app/shared/breadcrumbs/breadcrumbs";
import { ReactNode } from "react";


type TPageWrapperProps = {
    title: string,
    withUnderline?: boolean,
    description?: string,
    content?: ReactNode
}
export const PageWrapper = ({title, withUnderline, description, content}:TPageWrapperProps) => {

  const breadcrumbs = useBreadcrumbs();

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.inner}>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Heading rank={2} text={title} withUnderline={withUnderline ?? !!description} />
            {description && <Description description={description} />}
            {content}
            <div className={styles.form}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

