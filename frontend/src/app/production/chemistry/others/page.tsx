// "use client";

import styles from "./styles.module.css";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import ContactForm from "@/app/shared/contactForm/contactForm";
import { CATALOG_DB } from "@/api/db";
import Description from "@/app/shared/description/description";

const Page = () => {
  const { label, description } = CATALOG_DB.chemistry.others;
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.inner}>
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
