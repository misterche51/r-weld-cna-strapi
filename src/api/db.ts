import { BLOG_DB } from "./blog";
import { CONTACTS_DB } from "./contacts";
import { DEALERS_DB } from "./dealers";
import { DOWNLOADS_DB } from "./documentation";
import CATALOG_DB from "./catalog/db";

import { TInfoDB, TDataBase, TTorchesCatalog,  TNavigationMenuDB, TCatalogCategoriesDB } from "./declarations";


export const INFO_DB:TInfoDB =  {
  phone: {
    href: 'tel:84912293493',
    label: '8 (4912) 293-493'
  },
  email: {
    href: 'mailto:info@r-weld.ru',
    label: 'info@r-weld.ru'
  },
  address: 'ООО «Р-ВЕЛД» 390525 Рязанская обл., Рязанский муниципальный район, с. Поляны, ул. Новая, строение 15',
  description: 'Российский производитель и поставщик горелок для MIG и TIG сварки',
}


const CATALOG_CATEGORIES:TCatalogCategoriesDB = Object.values(CATALOG_DB).map(({label, target, type})  => ({label, target, type}))

const NAVIGATION_MENU_DB:TNavigationMenuDB  = [
  {
    label: "Продукция",
    target: 'production',
    menu: {
      type:'link',
      list: CATALOG_CATEGORIES,
    },
  },
  {
    label: "Документация",
    target: 'documentation',
    menu: {
      type: 'download',
      list: DOWNLOADS_DB
    },
  },
  {
    label: "Блог",
    target: "blog",
  },
  {
    label: "Контакты",
    target: "contacts",
  },
];


const DB: TDataBase = {
  info: INFO_DB,
  menu: NAVIGATION_MENU_DB,
  downloads: DOWNLOADS_DB,
  posts: BLOG_DB,
  contacts: CONTACTS_DB,
  dealers: DEALERS_DB,
  catalog: CATALOG_DB,
  catalog_categories: CATALOG_CATEGORIES,
};
export default DB;

  // catalog: {
  //   equipment: EQUIPMENT_DB,
    
    
    
  //   // [
  //   //   { label: "Сварочные источники", target: "welding_sources", image: "" },
  //   //   { label: "Дымовытяжные установки", target: "smoke_exhaust_systems", image: "" },
  //   //   { label: "Прочее", target: "", image: "" },
  //   // ],
  //   torches: {
  //     mig: {
  //       label: "Сварочные горелки MIG",
  //       image: "mig",
  //       categories: {
  //         "Воздушное охлаждение": [
  //           {
  //             label: "RF",
  //             target: "mig_rf_air",
  //           },
  //           {
  //             label: "MB",
  //             target: "mig_mb_air",
  //           },
  //           {
  //             label: "R-WELD",
  //             target: "mig_r-weld_air",
  //           },
  //         ],
  //         "Жидкостное охлаждение": [
  //           {
  //             label: "MB",
  //             target: "mig_mb_liquid",
  //           },
  //           {
  //             label: "R-WELD",
  //             target: "mig_r-weld_liquid",
  //           },
  //         ],
  //       },
  //     },
  //     tig: {
  //       label: "Сварочные горелки TIG",
  //       image: "tig",
  //       categories: {
  //         "Воздушное охлаждение": [
  //           {
  //             label: "R-WELD",
  //             target: "tig_r-weld_air",
  //           },
  //         ],
  //         "Жидкостное охлаждение": [
  //           {
  //             label: "R-WELD",
  //             target: "tig_r-weld_liquid",
  //           },
  //         ],
  //       },
  //     },
  //   } as TTorchesCatalog,
  //   roborization: "",
  // },
