import { IChemistryCategoryDB, TChemistrySectionContent } from "../declarations";


export interface ICarbonElectrodesDB extends IChemistryCategoryDB {
  data: TChemistrySectionContent;
}


export const CARBON_ELECTRODES_CATALOG_DATA:ICarbonElectrodesDB = {
    routing:   { 
      label: "Угольные электроды", 
      target: "carbon_electrodes", 
      absoluteTarget: "/production/chemistry/carbon_electrodes",
      image: "carbon_electrodes.png" 
    },
    header: {
      label: "Угольные электроды",
      description:
        "Повысьте производительность и экономичность с угольными электродами R-Weld. Покрытие из чистой меди обеспечивает оптимальную электропроводность, а высокая плотность гарантирует эффективный процесс. Длительный срок службы и стабильное качество наших электродов обеспечивают надёжность сварки и снижают эксплуатационные расходы. Инновационные соединяемые электроды повышают экономичность, делая угольные электроды R-Weld идеальным выбором для профессиональных сварщиков.",
    },
    data: {
      images: {
        abiarc_dc_single: {
          title: "Угольные электроды ABIARC DC штучные",
          src: "abiarc_dc_single.jpg",
          alt: "Таблица каталога угольных электродов ABIARC DC штучных",
        },
        abiarc_ac_single: {
          title: "Угольные электроды ABIARC AC штучные",
          src: "abiarc_ac_single.jpg",
          alt: "Таблица каталога угольных электродов ABIARC AC штучных",
        },
        abiarc_dc_connectable: {
          title: "Угольные электроды ABIARC DC соединяемые",
          src: "abiarc_dc_connectable.jpg",
          alt: "Таблица каталога угольных электродов ABIARC DC соединяемых",
        },
        abiarc_dc_flat: {
          title: "Угольные электроды ABIARC DC плоские",
          src: "abiarc_dc_flat.jpg",
          alt: "Таблица каталога угольных электродов ABIARC DC плоских",
        },
        abiarc_al_ac: {
          title: "Угольные электроды ABIARC AL (AC) для строжки",
          src: "abiarc_al_ac.jpg",
          alt: "Таблица каталога угольных электродов ABIARC AL (AC) для строжки",
        },
      },
    },
    tags: ['угольные электроды', 'угольные', 'электроды', 'ABIARC', 'AL', 'AC', 'DC', 'плоские', 'соединямемые'].map(tag => tag.toLowerCase().replace(' ', '+'))
  }

  CARBON_ELECTRODES_CATALOG_DATA.tags = [
    ...CARBON_ELECTRODES_CATALOG_DATA.tags!, 
    ...CARBON_ELECTRODES_CATALOG_DATA.header.description!.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,' ').split(' '), 
   ]