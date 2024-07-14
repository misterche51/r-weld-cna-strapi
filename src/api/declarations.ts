import { TPostItem } from "./blog/declarations";
import { TChemistryDB } from "./catalog/chemistry/declarations";
import { TEquipmentDB } from "./catalog/equipment/declarations";
import { TRobotizationsDB } from "./catalog/robotization/declarations";
import { TTorchesDB } from "./catalog/torches/declarations";
import { TContactsItem } from "./contacts/declarations";
import { TRegionItem } from "./dealers/declarations";
import { TDownloadsDB } from "./documentation/declarations";

export type TTorchesCategoryName = "mig" | "tig";
export type TTorcheSubCategoryData = {
  label: string;
  target: string;
};

export type TCoolingType = "Воздушное охлаждение" | "Жидкостное охлаждение";

export type TTorchesCatalog = Record<
  TTorchesCategoryName,
  TTorchesCategoryData
>;

export type TCatalogItem = "chemistry" | "equipment" | "torches" | "roborization";
export type TCatalogCategoryLink = {
  label: string;
  target: string;
  image: string;
};

export type TCatalogDB = {
  torches: TTorchesDB,
  chemistry: TChemistryDB,
  robotization:TRobotizationsDB,
  equipment: TEquipmentDB,
}

export type TCatalogCategoriesDB = {
  label: string,
  type: string,
  target: string,
}[];

export type TDataBase = {
  info: any;
  downloads: TDownloadsDB;
  posts: TPostItem[];
  contacts: TContactsItem[];
  dealers: TRegionItem[];
  catalog: TCatalogDB;
  menu: TNavigationMenuDB;
  catalog_categories: TCatalogCategoriesDB;
};

export type TTorchesCategoryData = {
  label: string;
  image: string;
  categories: Record<TCoolingType, TTorcheSubCategoryData[]>;
};

export type TInfoContactItem = {
  href: string,
  label: string,
}

export type TInfoDB = {
  phone: TInfoContactItem,
  email: TInfoContactItem,
  address: string,
  description: string,
}


export type TLinkItem = {
    label: string;
    target: string;
};

export type TMenuItem = {
    label: string;
    target?: string;
    menu?: {
        type: 'link'|'download';
    list: TLinkItem[]|TDownloadsDB};
};

export type TNavigationMenuDB = TMenuItem[]