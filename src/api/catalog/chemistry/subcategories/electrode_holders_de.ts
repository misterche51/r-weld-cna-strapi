import { IChemistryCategoryDB, TChemistrySectionContent} from "../declarations"


export interface IElectrodeDEHoldersDB extends IChemistryCategoryDB {
  data: TChemistrySectionContent;
}


export const ELECTRODE_HOLDERS_DE_CATALOG_DATA: IElectrodeDEHoldersDB = {
  routing:  { 
    label: "Электрододержатели DE", 
    target: "electrode_holders_de", 
    absoluteTarget: "/production/chemistry/electrode_holders_de",
    image: "electrode_holders_de.png" },
  header: {
    label: "Электрододержатели DE2200 / DE2300 / DE2400 / DE2500",
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
  tags: ['держатель', 'электродержатель', 'электрододержатель', 'держак','держатели', 'Электрододержатели', 'электрододержатели', 'держаки', 'DE2200', 'DE', 'DE2300', 'DE2400', 'DE2500', 'DE+2200',  'DE+2300', 'DE+2400', 'DE+2500', 'DE2200',  'DE 2300', 'DE 2400', 'DE 2500'].map(tag => tag.toLowerCase().replace(' ', '+'))
}

ELECTRODE_HOLDERS_DE_CATALOG_DATA.tags = [...ELECTRODE_HOLDERS_DE_CATALOG_DATA.tags!, ...ELECTRODE_HOLDERS_DE_CATALOG_DATA.header.description!.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,' ').split(' ')]
