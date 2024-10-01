// "use client";

import styles from "./styles.module.css";
import { TTorchesType } from "@/api/catalog/torches/declarations";
import Item from "./components/item/item";
import { PageWrapper } from "@/app/layout/pageWrapper";

import DB from "@/api/db";
import PageNotFound from "@/app/not-found";

const Page = ({
  params,
}: {
  params: {
    categoryName: TTorchesType;
  };
}) => {
  const [group,,cooling] = params.categoryName.split('_') as ['tig'|'mig', string, 'air'|'liquid'];
  const isAirCooling = cooling === 'air';
 
  const res = DB.catalog.torches.data.classes[group]?.categories[isAirCooling?'Воздушное охлаждение':'Жидкостное охлаждение'].filter(({target}) => target === params.categoryName)[0]?.data
  if (!res) return <PageNotFound />
  const {label = '', list =[]} = res;
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
