// "use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import ContactForm from "@/app/shared/contactForm/contactForm";
import { CHEMISTRY_DB } from "@/api/db";
import ImageWrapper from "../components/imageWrapper/imageWrapper";
import Description from "@/app/shared/description/description";

const Page = () => {
  const { label, description, images } = CHEMISTRY_DB.carbon_electrodes;
  const sectionNames = Object.keys(images);
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.inner}>
            <Heading rank={2} text={label} withUnderline={true} />
            {description && <Description description={description} />}
            {sectionNames.map((name) => {
              const { title, alt, src } = images[name];
              return (
                <ImageWrapper
                  title={title}
                  image={
                    <div
                      className={`${styles.image} ${styles[`image--${name}`]}`}
                    >
                      <Image
                        className={styles.image__pic}
                        src={`/carbon_electrodes/${src}`}
                        alt={alt}
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                      />
                    </div>
                  }
                />
              );
            })}
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
