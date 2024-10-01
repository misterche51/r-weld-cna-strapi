import { IChemistryCategoryDB, TChemistrySectionContent} from "../declarations"


export interface IElectricalHoldersDB extends IChemistryCategoryDB {
  data: TChemistrySectionContent;
}


export const ELECTRICAL_HOLDERS_CATALOG_DATA: IElectricalHoldersDB = {
  routing:  { 
    label: "Электродержатели", 
    target: "electrical_holders", 
    absoluteTarget: "/production/chemistry/electrical_holders",
    image: "electrical_holders.png" },
  header: {
    label: "Электродержатели DE2200 / DE2300 / DE2400 / DE2500",
    description:
      "Обеспечьте максимальную производительность и комфорт при ручной сварке штучным электродом с электрододержателями R-Weld. Наши электрододержатели оснащены овальной теплоизолирующей рукояткой и высококачественными изоляционными материалами, обеспечивающими комфорт и безопасность сварщика. Надёжная фиксация электрода в четырёх положениях и широкий диапазон совместимости с электродами и сварочными кабелями делают электрододержатели R-Weld идеальным инструментом для различных сварочных задач. Приобретая электрододержатели R-Weld, вы инвестируете в эффективность и безопасность.",
  },
  data: {
    images: {
      table: {
        src: "holders_table.jpg",
        alt: "Таблица каталога электродержателей",
      },
      scheme: {
        src: "holders_scheme.jpg",
        alt: "Устройство электродержателя схема",
      },
      parts: {
        title: "Запчасти и расходники",
        src: "holders_parts.jpg",
        alt: "Запчасти и расходники",
      },
    },
  },
  tags: ['держатели', 'электродержатели', 'DE2200', 'DE', 'DE2300', 'DE2400', 'DE2500'].map(tag => tag.toLowerCase().replace(' ', '+'))
}