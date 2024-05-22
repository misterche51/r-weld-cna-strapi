// "use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import ContactForm from "@/app/shared/contactForm/contactForm";
import { CATALOG_DB } from "@/api/db";
import Description from "@/app/shared/description/description";

const Page = () => {
  const { label, description, images } = CATALOG_DB.chemistry.quick_couplings;
  const tables = Object.values(images);
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.inner}>
            <Heading rank={2} text={label} withUnderline={true} />
            {description && <Description description={description} />}
            <div className={styles.content}>
              {tables.map(({ src, alt }, i) => (
                <div key={i} className={styles.image}>
                  <Image
                    className={styles.image__pic}
                    src={`/quick_couplings/${src}`}
                    alt={alt}
                    width={628}
                    height={1331}
                    priority
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
            </div>
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
