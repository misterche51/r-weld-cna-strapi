

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


export async function generateStaticParams() {
  // @ts-expect-error
  const params = [];
  // Проходимся по всем классам отводов
  for (const group of Object.keys(DB.catalog.torches.data.classes)) {
    // @ts-expect-error
    const categories = DB.catalog.torches.data.classes[group].categories
    if (categories) {
      if (categories['Воздушное охлаждение']) {
          // @ts-expect-error
        categories['Воздушное охлаждение'].forEach(item => params.push({ categoryName: `${item.target}` }));
      }
      if (categories['Жидкостное охлаждение']) {
          // @ts-expect-error
        categories['Жидкостное охлаждение'].forEach(item => params.push({ categoryName: `${item.target}` }));
      }
    }
  }
  // Возвращаем объект с путями и настройками fallback
    // @ts-expect-error
  return params
}

export default Page;
