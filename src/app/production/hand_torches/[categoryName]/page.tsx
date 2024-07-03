// "use client";

import styles from "./styles.module.css";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import ContactForm from "@/app/shared/contactForm/contactForm";
import { CATALOG_DB } from "@/api/db";
import { TTorchesType } from "@/api/catalog/torches/declarations";
import Item from "./components/item/item";
import { PageWrapper } from "@/app/layout/pageWrapper";

const Page = ({
  params,
}: {
  params: {
    categoryName: TTorchesType;
  };
}) => {
  const { label, list } = CATALOG_DB.torches[params.categoryName];

  const content = <ul className={styles.list}>
  {list.map((data, i) => (
    <li key={i} className={styles.list__item}>
      <Item {...data} />
    </li>
  ))}
</ul>
  return (
    <PageWrapper title={label} content={content} />);
};
export default Page;
