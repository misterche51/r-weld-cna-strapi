// "use client";

// import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import ContactForm from "@/app/shared/contactForm/contactForm";
import { CHEMISTRY_DB } from "@/api/db";
import Item from "./components/item/item";

const Page = () => {
  const { label, description, list } = CHEMISTRY_DB.weld_chemistry;
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.inner}>
            <Heading rank={2} text={label} withUnderline={false} />
            <p className={styles.description}>{description}</p>
            <ul className={styles.list}>
              {list.map((data, i) => (
                <li key={i} className={styles.list__item}>
                  <Item {...data} />
                </li>
              ))}
            </ul>

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
