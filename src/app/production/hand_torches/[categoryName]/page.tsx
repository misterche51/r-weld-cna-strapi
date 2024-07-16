// "use client";

import styles from "./styles.module.css";
import { TTorchesType } from "@/api/catalog/torches/declarations";
import Item from "./components/item/item";
import { PageWrapper } from "@/app/layout/pageWrapper";

import DB from "@/api/db";

const Page = ({
  params,
}: {
  params: {
    categoryName: TTorchesType;
  };
}) => {
  const [group,,cooling] = params.categoryName.split('_');
  const isAirCooling = cooling === 'air';
  const {label, list } = DB.catalog.torches.data.classes[group].categories[isAirCooling?'Воздушное охлаждение':'Жидкостное охлаждение'].filter(({target}) => target === params.categoryName)[0].data
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
