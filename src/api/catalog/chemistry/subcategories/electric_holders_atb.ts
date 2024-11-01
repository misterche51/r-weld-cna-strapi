import { IChemistryCategoryDB, TChemistrySectionContent} from "../declarations"


export interface IElectricalATBHoldersDB extends IChemistryCategoryDB {
  data: TChemistrySectionContent;
}


export const ELECTRIC_HOLDERS_ATB_CATALOG_DATA: IElectricalATBHoldersDB = {
  routing:  { 
    label: "Электрододержатели ATB", 
    target: "electric_holders_atb", 
    absoluteTarget: "/production/chemistry/electric_holders_atb",
    image: "electric_holders_atb_.png" 
  },
  header: {
    label: "Электрододержатели ATB300 / ATB400 / ATB500 / ATB600",
    description:
      "Надёжная классика... Электрододержатели используются для ручной сварки электродами с покрытием. Ручная электродная сварка является одной из старейших и наиболее распространенных в настоящее время операций дуговой сварки. Она выделяется возможностью низких инвестиций в оборудование, а также её универсальными применениями. Линейка электрододержателей ATB, благодаря своей чрезвычайно прочной конструкции, является идеальным инструментом для наружных работ, а также для работ на верфях, металлоконструкциях, строительстве трубопроводов и т.д.",
  },
  data: {
    images: {
      worker: {
        src: "worker.png",
        alt: "Работник использует электрододержатель atb",
      },
      table: {
        src: "table.png",
        alt: "Таблица доступных к заказу электрододержателей atb",
      },
    },
  },
  tags: ['держатель', 'электродержатель', 'электрододержатель', 'держак','держатели', 'Электрододержатели', 'электрододержатели', 'держаки', 'ATB300', 'atb', 'ATB400', 'ATB500', 'ATB600', 'ATB+300',  'ATB+400', 'ATB+500', 'ATB+600'].map(tag => tag.toLowerCase().replace(' ', '+'))
}

ELECTRIC_HOLDERS_ATB_CATALOG_DATA.tags = [...ELECTRIC_HOLDERS_ATB_CATALOG_DATA.tags!, ...ELECTRIC_HOLDERS_ATB_CATALOG_DATA.header.description!.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,' ').split(' ')]
