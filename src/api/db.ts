import { BLOG_DB } from "./blog";
import { CONTACTS_DB } from "./contacts";
import { DEALERS_DB } from "./dealers";

import { TPostItem } from "./blog/declarations";
import { TContactsItem } from "./contacts/declarations";
import { TRegionItem } from "./dealers/declarations";

import { CHEMISTRY_DB, TORCHES_DB } from "./catalog";
import { ROBOTIZATION_DB } from "./catalog/robotization";
import { DOWNLOADS_DB } from "./documentation";
import { TDownloadsDB } from "./documentation/declarations";

type TTorchesCategoryName = "mig" | "tig";
export type TTorcheSubCategoryData = {
  label: string;
  target: string;
};

type TCoolingType = "Воздушное охлаждение" | "Жидкостное охлаждение";

export type TTorchesCatalog = Record<
  TTorchesCategoryName,
  TTorchesCategoryData
>;

type TCatalogItem = "chemistry" | "equipment" | "torches" | "roborization";
type TCatalogCategoryLink = {
  label: string;
  target: string;
  image: string;
};

type TDataBase = {
  info: any;
  downloads: TDownloadsDB;
  posts: TPostItem[];
  contacts: TContactsItem[];
  dealers: TRegionItem[];
  catalog: Record<
    TCatalogItem,
    TTorchesCatalog | TCatalogCategoryLink[] | ""
  > & { chemistry: TCatalogCategoryLink[] };
};

export type TTorchesCategoryData = {
  label: string;
  image: string;
  categories: Record<TCoolingType, TTorcheSubCategoryData[]>;
};

type TInfoContactItem = {
  href: string,
  label: string,
}

type TInfoDB = {
  phone: TInfoContactItem,
  email: TInfoContactItem,
  address: string,
  description: string,

}
export const INFO_DB:TInfoDB =  {
  phone: {
    href: 'tel:88009001010',
    label: '8 800 900-10-10'
  },
  email: {
    href: 'mailto:info@r-weld.ru',
    label: 'info@r-weld.ru'
  },
  address: 'ООО «Р-ВЕЛД» 390525 Рязанская обл., Рязанский муниципальный район, с. Поляны, ул. Новая, строение 15',
  description: 'Российский производитель и поставщик горелок для MIG и TIG сварки',
}

const DB: TDataBase = {
  info: INFO_DB,
  downloads: DOWNLOADS_DB,
  posts: BLOG_DB,
  contacts: CONTACTS_DB,
  dealers: DEALERS_DB,
  catalog: {
    chemistry: [
      { label: "Сварочная химия", target: "weld_chemistry", image: "" },
      { label: "Электродержатели", target: "electrical_holders", image: "" },
      { label: "Угольные электроды", target: "carbon_electrodes", image: "" },
      { label: "Строгачи", target: "planers", image: "" },
      {
        label: "Вольфрамовые электроды",
        target: "tungsten_electrodes",
        image: "",
      },
      { label: "Байонетные разъемы", target: "bayonet_connectors", image: "" },
      {
        label: "Быстросъемные соединения",
        target: "quick_couplings",
        image: "",
      },
      { label: "Прочие аксессуары", target: "other_accessories", image: "" },
    ],
    equipment: [
      { label: "Сварочные источники", target: "", image: "" },
      { label: "Дымовытяжные установки", target: "", image: "" },
      { label: "Прочее", target: "", image: "" },
    ],
    torches: {
      mig: {
        label: "Сварочные горелки MIG",
        image: "mig",
        categories: {
          "Воздушное охлаждение": [
            {
              label: "RF",
              target: "mig_rf_air",
            },
            {
              label: "MB",
              target: "mig_mb_air",
            },
            {
              label: "R-WELD",
              target: "mig_r-weld_air",
            },
          ],
          "Жидкостное охлаждение": [
            {
              label: "MB",
              target: "mig_mb_liquid",
            },
            {
              label: "R-WELD",
              target: "mig_r-weld_liquid",
            },
          ],
        },
      },
      tig: {
        label: "Сварочные горелки TIG",
        image: "tig",
        categories: {
          "Воздушное охлаждение": [
            {
              label: "R-WELD",
              target: "tig_r-weld_air",
            },
          ],
          "Жидкостное охлаждение": [
            {
              label: "R-WELD",
              target: "tig_r-weld_liquid",
            },
          ],
        },
      },
    } as TTorchesCatalog,
    roborization: "",
  },
};
export default DB;

export const CATALOG_DB = {
  torches: TORCHES_DB,
  chemistry: CHEMISTRY_DB,
  robotization: ROBOTIZATION_DB,
};
