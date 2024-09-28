import { IChemistryCategoryDB, TChemistrySectionContent } from "../declarations";

export interface IQuickCouplingsDB extends IChemistryCategoryDB {
  data: TChemistrySectionContent;
}

export const QUICK_COUPLINGS_CATALOG_DATA: IQuickCouplingsDB = {
    routing: {
      label: "Быстросъемные соединения",
      target: "quick_couplings",
      image: "",
    },
    header: {
      label: "Быстросъемные соединения",
      description:
        "Ускорьте работу производства с быстросъёмными соединениями от R-Weld.\nНаши быстросъёмные соединения позволяют экономить время и повышать производительность. Также они универсальны и совместимы с широким спектром сварочных аппаратов и кабелей, что делает их идеальным решением для различных сварочных работ.\nСистема быстросъёмных соединений R-Weld спроектирована в соответствии с высочайшими стандартами безопасности, обеспечивая надёжное и защищённое соединение, предотвращая случайное отключение.",
    },
    data: {
      images: {
        table_0: {
          src: "table_0.jpg",
          alt: "Сводная таблица с быстросъемными соединениями, часть 1",
        },
        table_1: {
          src: "table_1.jpg",
          alt: "Сводная таблица с быстросъемными соединениями, часть 2",
        },
      }
    },
    tags: ['Быстросъемные+соединения', 'Быстросъемный', 'быстросъемные', 'соединения'].map(tag => tag.toLowerCase().replace(' ', '+'))
  }