import { TCatalogCategoriesDB } from "./declarations";

export const BREADCRUMBS_DICTIONARY: Record<string, string> = {
  production: "Продукция",
  home: "Главная",
  blog: "Блог",
  documentation: 'Документация',
  contacts: 'Контакты',
  robotization: "Роботизация и автоматизация",
  chemistry: "Сварочная химия и аксессуары",
  quick_couplings: "Быстросъемные соединения",
  planers: "Строгачи",
  weld_chemistry: "Сварочная химия",
  carbon_electrodes: "Угольные электроды",
  electrical_holders: "Электродержатели DE2200 / DE2300 / DE2400 / DE2500",
  tungsten_electrodes: "Вольфрамовые электроды",
  bayonet_connectors: "Байонетные разъемы",
  other_accessories: "Прочие аксессуары",
  hand_torches: "Ручные горелки",
  equipment_and_other: "Оборудование и прочее",
};

export const CATALOG_CATEGORIES_DB: TCatalogCategoriesDB = [
  {
    label: "Ручные горелки",
    type: "hand",
    target: "production/hand_torches",
  },
  {
    label: "Роботизация и автоматизация",
    type: "robotization",
    target: "production/robotization",
  },
  {
    label: "Сварочная химия и аксессуары",
    type: "materials",
    target: "production/chemistry",
  },
  {
    label: "Оборудование и прочее",
    type: "others",
    target: "production/equipment_and_other",
  },
];
