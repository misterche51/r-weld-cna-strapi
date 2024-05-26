"use client";

import styles from "./styles.module.css";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import ContactForm from "@/app/shared/contactForm/contactForm";
import { CATALOG_DB } from "@/api/db";
import Description from "@/app/shared/description/description";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "@/app/shared/breadcrumbs/breadcrumbs";

const Page = () => {
  const { label, description } = CATALOG_DB.chemistry.other_accessories;
  const breadcrumbs = useBreadcrumbs();

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.inner}>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Heading rank={2} text={label} withUnderline={true} />
            {description && <Description description={description} />}
            <div className={styles.form}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};
export default Page;
