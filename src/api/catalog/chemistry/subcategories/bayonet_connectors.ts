import { TImageData, IChemistryCategoryDB } from "../declarations";

type TBayonetConnectorsTechInfoSection = {
  title: string;
  image: TImageData;
  table: {
    heading: string;
    rows: string[];
  };
};

type TBayonetConnectorsSystemsTable = {
  heading: string;
  rows: { label: string; number: string }[];
};

type TBayonetConnectorsSystemsSection = {
  title: string;
  sections: {
    image: TImageData;
    tables: TBayonetConnectorsSystemsTable[];
  }[];
};

type TBayonetConnectorsContent = {
  technical_info: TBayonetConnectorsTechInfoSection;
  systems: TBayonetConnectorsSystemsSection;
};

export interface IBayonetConnectorsDB extends IChemistryCategoryDB {
  data: TBayonetConnectorsContent;
}



export const BAYONET_CONNECTORS_CATALOG_DATA:IBayonetConnectorsDB = {
  routing: { 
    label: "Байонетные разъемы", 
    target: "bayonet_connectors", 
    absoluteTarget: "/production/chemistry/bayonet_connectors",
    image: "bayonet_connectors.png" 
  },  
  header: {
      label: "Байонетные разъемы",
      description:
        "Наши байонетные разъёмы гарантируют абсолютную безопасность установок для дуговой сварки, обеспечивая надёжное и быстрое соединение с защитой от пробоя.\nУниверсальная система подключения, доступная в различных конфигурациях, включая панельное гнездо/кабельный штекер и панельный штекер/кабельное гнездо. Данные разъёмы легко интегрируются с оборудованием большинства производителей.\nКвадратная геометрия профиля предотвращает прокручивание, обеспечивая оптимальное крепление и отличную токопередачу, а соответствие стандартам EN 60 974–12 гарантирует надёжность и высокие требования безопасности.",
  
  },
  data: {
    technical_info: {
      title: "Технические данные",
      image: {
        src: "technical_info.jpeg",
        alt: "Таблица с техническими данными байонетных разъемов",
      },
      table: {
        heading: "*ABI–CM / ABI–IF или АBI–CF / ABI–IM",
        rows: [
          "ABI–CM (Cable Male) = кабельный штекер",
          "ABI–CF (Cable Female) = кабельное гнездо",
          "ABI–IM (Insert мale) = панельный штекер",
          "ABI–IF (Insert Female) = панельное гнездо",
        ],
      },
    },
    systems: {
      title: "Система байонетных разъемов",
      sections: [
        {
          image: {
            src: "table_1-8.jpg",
            alt: "Общий вид разъемов 1-8 из таблицы",
          },
          tables: [
            {
              heading: "Панельные гнезда",
              rows: [
                { label: "1. ABI–IF 10–25", number: "Идент. No: 511.0304" },
                { label: "2. ABI–IF 35-50", number: "Идент. No: 511.0314" },
                { label: "3. ABI–IF 50–70", number: "Идент. No: 511.0330" },
                { label: "4. ABI-IF 70-95", number: "Идент. No: 511.0309" },
              ],
            },
            {
              heading: "Кабельные штекера",
              rows: [
                { label: "5. ABI–CM 10–25", number: "Идент. No: 511.0305" },
                { label: "6. ABI–CM 35-50", number: "Идент. No: 511.0315" },
                { label: "7. ABI–CM 50–70", number: "Идент. No: 511.0331" },
                { label: "8. ABI-CM 70-95", number: "Идент. No: 511.0342" },
              ],
            },
          ],
        },
        {
          image: {
            src: "table_9-16.jpg",
            alt: "Общий вид разъемов 9-16 из таблицы",
          },
          tables: [
            {
              heading: "Панельные гнезда",
              rows: [
                { label: "9. ABI–IM 10–25", number: "Идент. No: 511.0306" },
                { label: "10. ABI–IM 35-50", number: "Идент. No: 511.0316" },
                { label: "11. ABI–IM 50–70", number: "Идент. No: 511.0332" },
                { label: "12. ABI-IM 70-95", number: "Идент. No: 511.0320" },
              ],
            },
            {
              heading: "Кабельные штекера",
              rows: [
                { label: "13. ABI–CF 10–25", number: "Идент. No: 511.0303" },
                { label: "14. ABI–CF 35-50", number: "Идент. No: 511.0313" },
                { label: "15. ABI–CF 50–70", number: "Идент. No: 511.0329" },
                { label: "16. ABI-CF 70-95", number: "Идент. No: 511.0340" },
              ],
            },
          ],
        },
      ],
    },
  },
  tags: ['байонетные разъемы', 'байонетные', 'разъемы', 'штекера', 'штекеры', 'Панельные гнезда', 'панельные', 'гнезда', 'гнёзда', 'кабельные','кабельные штекеры', 'кабельные штекера','abi', 'cf', 'im', 'cm', 'разъем', 'ABI-CF', 'ABI-IM', 'ABI-CM'].map(tag => tag.toLowerCase().replace(' ', '+'))
}

BAYONET_CONNECTORS_CATALOG_DATA.tags = [...BAYONET_CONNECTORS_CATALOG_DATA.tags!, ...BAYONET_CONNECTORS_CATALOG_DATA.header.description!.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,' ').split(' ') ]