type TPostItem = {
  id: number;
  previewTitle: string;
  articleTitle?: string;
  shortDescription: string;
  fullDescription?: string;
  date: string;
  image: string;
};

type TPhoneLinkData = {
  label: string;
  href: string;
};

type TContactsItem = {
  id: number;
  city: string;
  address: string;
  phone: TPhoneLinkData;
  email: string;
  delivery: string;
  promo?: string;
};

export type TDealerItem = {
  name: string;
  phone?: string;
  address?: string;
  email?: string;
  site?: string;
};

type TRegionItem = {
  region: string;
  list: TDealerItem[];
};

type TTorchesCategoryName = "mig" | "tig";
export type TTorcheSubCategoryData = {
  label: string;
  target: string;
};

type TCoolingType = "Воздушное охлаждение" | "Жидкостное охлаждение";

export type TTorchesItem = {
  name: string;
  image: string;
  co2: string;
  gas: string;
  pv: string;
  wire: string;
};
export type TTorchesCatalog = Record<
  TTorchesCategoryName,
  TTorchesCategoryData
>;

type TCatalogItem = "chemistry" | "equipment" | "torches" | "roborization";

type TDataBase = {
  posts: TPostItem[];
  contacts: TContactsItem[];
  dealers: TRegionItem[];
  catalog: Record<TCatalogItem, TTorchesCatalog | any>;
};

export type TTorchesCategoryData = {
  label: string;
  image: string;
  categories: Record<TCoolingType, TTorcheSubCategoryData[]>;
};

const DB: TDataBase = {
  posts: [
    {
      previewTitle: "Открытие нового филиала",
      articleTitle:
        "Хотим вам сообщить, что открылся новый филиал в Санкт-Петербурге",
      shortDescription:
        "Противоположная точка зрения подразумевает, что базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть в равной степени предоставлены сами себе. Задача организации, в особенности же экономическая повестка сегодняшнего дня прекрасно подходит для реализации новых принципов формирования материально-технической и кадровой базы.",
      fullDescription:
        "Противоположная точка зрения подразумевает, что базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть в равной степени предоставлены сами себе. Задача организации, в особенности же экономическая повестка сегодняшнего дня прекрасно подходит для реализации новых принципов формирования материально-технической и кадровой базы.",
      image: "blog_0.jpg",
      date: "2 марта 1992",
      id: 0,
    },
    {
      previewTitle: "Новинка",
      shortDescription:
        "Имеется спорная точка зрения, гласящая примерно следующее: стремящиеся вытеснить традиционное производство, нанотехнологии лишь добавляют фракционных разногласий и описаны максимально подробно.",
      image: "blog_0.jpg",
      date: "5 марта 1992",
      id: 1,
    },
    {
      previewTitle: "Доставка",
      shortDescription:
        "Есть над чем задуматься: представители современных социальных резервов могут быть заблокированы в рамках своих собственных рациональных ограничений.",
      image: "blog_0.jpg",
      date: "5 марта 1992",
      id: 2,
    },
  ],
  contacts: [
    {
      id: 0,
      city: "Рязань",
      address: "Рязанская обл., с. Поляны, ул. Новая, строение 15",
      phone: {
        label: "8 800 900-10-10",
        href: "+78009001010",
      },
      email: "info@r-weld.ru",
      delivery: "Доставка до терминала Деловые Линии за наш счёт",
      promo: "Дополнительная скидка 2%",
    },
    {
      id: 1,
      city: "Москва",
      address: "Московская обл., г. Москва, ул. Старая, строение 666",
      phone: {
        label: "8 800 300-06-00",
        href: "+78009001010",
      },
      email: "info@r-weld.ru",
      delivery: "Доставка до терминала Деловые Линии за наш счёт",
      promo: "Дополнительная скидка 200%",
    },
    {
      id: 2,
      city: "Санкт-Петербург",
      address:
        "Ленинградская обл., г. Санкт-Петебург, ул. Стародеревенская,  д 1",
      phone: {
        label: "8 800 300-06-00",
        href: "+78009001010",
      },
      email: "info@r-weld.ru",
      delivery: "Доставка до терминала Деловые Линии за наш счёт",
    },
    {
      id: 3,
      city: "Екатеринбург",
      address: "г. Екатеринбург, ул. Новодеревенская,  д 2",
      phone: {
        label: "8 800 300-06-00",
        href: "+78009001010",
      },
      email: "info@r-weld.ru",
      delivery: "Доставка до терминала Деловые Линии за наш счёт",
    },
    {
      id: 4,
      city: "Красноярск",
      address: "г. Красноярск, ул. Няшная,  д 20",
      phone: {
        label: "8 800 300-06-00",
        href: "+78009001010",
      },
      email: "info@r-weld.ru",
      delivery: "Доставка до терминала Деловые Линии за наш счёт",
    },
  ],
  dealers: [
    {
      region: "Белгородская область",
      list: [
        {
          name: "ООО «Артисан»",
          phone: "(4722) 200-309, 569-577, 569-576",
          address: "г. Белгород, ул. Корочанская, дом 132А",
          email: "info@astraweld.ru",
          site: "www.artisan31.ru",
        },
        {
          name: "ООО МК «Белогорье»",
          phone: "(4722) 58-37-90, 42-50-25",
          address: "г. Белгород, ул. Промышленная, д.1",
          email: "juryeva@metizi.ru",
          site: "www.svarka-belgorod.ru",
        },
      ],
    },
    {
      region: "Воронежская область",
      list: [
        {
          name: "Торговый центр «Технофактор»",
          phone: "(473) 261-74-57",
          address: "г. Воронеж, пер. Отличников, д. 1",
          site: "www.alfa-ars.ru",
        },
        {
          name: "ООО «Фоксвелд Черноземье»",
          phone: "(473) 257-38-58",
          address: "г. Воронеж, ул. Волгоградская, д. 46a, офис 104Б",
          email: "info@foxweld36.ru",
          site: "www.foxweld.ru",
        },
      ],
    },
  ],
  catalog: {
    chemistry: [
      { label: "Сварочная химия", target: "weld_chemistry", image: "" },
      { label: "Электродержатели", target: "electrical_holders", image: "" },
      { label: "Угольные электроды", target: "carbon_electrodes", image: "" },
      { label: "Строгачи", target: "planers", image: "" },
      { label: "Вольфрамовые электроды" },
      { label: "Байонетные разъемы", target: "bayonet_connectors", image: "" },
      {
        label: "Быстросъемные соединения",
        target: "quick_couplings",
        image: "",
      },
      { label: "Прочие аксессуары", target: "others", image: "" },
    ],
    equipment: [
      { label: "Сварочные источники" },
      { label: "Дымовытяжные установки" },
      { label: "Прочее" },
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
              list: [
                {
                  name: "RF GRIP 15",
                  image: "rf_grip_15",
                  co2: "180 A",
                  gas: "150 A",
                  pv: "60%",
                  wire: "0.6 - 1.0 мм",
                },
              ],
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
              label: "RF",
              target: "mig_rf_liquid",
            },
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
              label: "ABITIG",
              target: "tig_abitig_air",
            },
            {
              label: "R-WELD",
              target: "tig_r-weld_air",
            },
          ],
          "Жидкостное охлаждение": [
            {
              label: "ABITIG",
              target: "tig_abitig_liquid",
            },
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

export type TTorchesType =
  | "mig_rf_air"
  | "mig_rf_liquid"
  | "mig_mb_air"
  | "mig_mb_liquid"
  | "mig_r-weld_air"
  | "mig_r-weld_liquid"
  | "tig_abitig_air"
  | "tig_abitig_liquid"
  | "tig_r-weld_air"
  | "tig_r-weld_liquid";

export const TORCHES_DB: Record<
  TTorchesType,
  { label: string; list: TTorchesItem[] }
> = {
  mig_rf_air: {
    label: "Ручные горелки RF GRIP",
    list: [
      {
        name: "RF GRIP 15",
        image: "",
        co2: "180 A",
        gas: "150 A",
        pv: "60%",
        wire: "0.6 - 1.0 мм",
      },
      {
        name: "RF GRIP 25",
        image: "",
        co2: "180 A",
        gas: "200 A",
        pv: "60%",
        wire: "0.6 - 1.0 мм",
      },
      {
        name: "RF GRIP 26",
        image: "",
        co2: "180 A",
        gas: "200 A",
        pv: "60%",
        wire: "0.6 - 1.0 мм",
      },
      {
        name: "RF GRIP 36",
        image: "",
        co2: "180 A",
        gas: "200 A",
        pv: "60%",
        wire: "0.6 - 1.0 мм",
      },
      {
        name: "RF GRIP 36 LC",
        image: "",
        co2: "180 A",
        gas: "200 A",
        pv: "60%",
        wire: "0.6 - 1.0 мм",
      },
      {
        name: "RF GRIP 45",
        image: "",
        co2: "180 A",
        gas: "200 A",
        pv: "60%",
        wire: "0.6 - 1.0 мм",
      },
    ],
  },
  mig_rf_liquid: {
    label: "",
    list: [],
  },
  mig_mb_air: {
    label: "Ручные горелки MB EVO",
    list: [],
  },
  mig_mb_liquid: {
    label: "",
    list: [],
  },
  "mig_r-weld_air": {
    label: "",
    list: [],
  },
  "mig_r-weld_liquid": {
    label: "",
    list: [],
  },
  tig_abitig_air: {
    label: "",
    list: [],
  },
  tig_abitig_liquid: {
    label: "",
    list: [],
  },
  "tig_r-weld_air": {
    label: "",
    list: [],
  },
  "tig_r-weld_liquid": {
    label: "",
    list: [],
  },
};

export type TChemistrySectionHeader = {
  label: string;
  description?: string;
};
export type TChemistrySectionContent = {
  images: Record<string, { src: string; alt: string; title?: string }>;
};

type TChemistrySectionData = TChemistrySectionHeader & TChemistrySectionContent;

type TImageData = {
  src: string;
  alt: string;
};

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
  data: {
    technical_info: TBayonetConnectorsTechInfoSection;
    systems: TBayonetConnectorsSystemsSection;
  };
};

type TChemistryDB = {
  weld_chemistry: any;
  electrical_holders: TChemistrySectionData;
  carbon_electrodes: TChemistrySectionData;
  planers: TChemistrySectionData;
  quick_couplings: TChemistrySectionData;
  bayonet_connectors: TChemistrySectionHeader & TBayonetConnectorsContent;
  others: TChemistrySectionHeader;
};

export const CHEMISTRY_DB: TChemistryDB = {
  weld_chemistry: {
    label: "Сварочная химия",
    description:
      "В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований. А ещё элементы политического процесса смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.\n\nОднозначно, базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что интерактивные прототипы объективно рассмотрены соответствующими инстанциями.",
    list: [
      {
        name: "Спрей пистолетный BINZEL",
        image: "",
        info: "Препятствует налипанию брызг, увеличивает ресурс наконечника, вставки и сопла. Не содержит силикон фрионов и других озоноразрушающих веществ. Содержание: 400 мл (уп. 12 шт.)",
      },
      {
        name: "Спрей керамический",
        image: "",
        info: "Произведён по особой технологии и не содержит силикона. Этот недавно разработанный защитный спрей особенно подходит для автоматизированных и продолжительных процессов сварки. Содержание: 400 мл (уп. 12 шт.)",
      },
      {
        name: "Спрей пистолетный NF невоспламеняющийся",
        image: "",
        info: "Предназначен для защиты деталей сварочной горелки от налипания сварочных брызг. Способствует увеличению срока службы быстро изнашивающихся деталей горелки. Не содержит силикона. Содержание: 300 мл (уп. 12 шт.)",
      },
      {
        name: "Паста “Дюзофикс”",
        image: "",
        info: "Препятствует налипанию брызг, увеличивает ресурс наконечника, вставки и сопла. Содержание: 300 мл",
      },
      {
        name: "Средство против налипания брызг ROBO",
        image: "",
        info: "Увеличивает ресурс наконечника, вставки и сопла.",
      },
      {
        name: "Эмульсия ABIBLUE NF - защита от сварочных брызг",
        image: "",
        info: "Используется со всеми видами сварки, в том числе с лазерной и плазменной резкой. Защищает свариваемые поверхности, не влияет на последующие процессы покрытия (лакокраски, оцинковки и т.д.) Защищает от повышенного ввода водорода при сварке алюминия. Канистра 10 л",
      },
      {
        name: "Охлаждающий агент BNC-50 NF",
        image: "",
        info: "Специальное охлаждающее средство ABICOR BINZEL®, морозоустойчивость до -45°С для всех жидкостно охлаждаемых установок сварки и резки. 5 литров",
      },
      {
        name: "Тестер электропроводимости Primo 5",
        image: "",
        info: "Идеально подходит для проверки электропроводимости. Благодаря своей компактной конструкции, позволяет выполнить измерения даже быстрее и проще.",
      },
      {
        name: "Охлаждающий агент",
        image: "",
        info: "Позволяет избежать: истончения меди и электролитической коррозии.",
      },
    ],
  },
  electrical_holders: {
    label: "Электродержатели DE2200 / DE2300 / DE2400 / DE2500",
    description:
      "В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований. А ещё элементы политического процесса смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.\n\nОднозначно, базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что интерактивные прототипы объективно рассмотрены соответствующими инстанциями.",
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
  carbon_electrodes: {
    label: "Угольные электроды",
    description:
      "В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований. А ещё элементы политического процесса смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.\n\nОднозначно, базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что интерактивные прототипы объективно рассмотрены соответствующими инстанциями.",
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
  planers: {
    label: "Строгачи",
    description:
      "В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований. А ещё элементы политического процесса смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.\n\nОднозначно, базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что интерактивные прототипы объективно рассмотрены соответствующими инстанциями.",
    images: {
      scheme: {
        title: "K 10 / K 12 / K 12 T / K 16 / K 16 T/ K 20",
        src: "scheme.jpg",
        alt: "Строгач в разобранном виде",
      },
      components: {
        title: "Комплектующие и расходные материалы",
        src: "components.jpg",
        alt: "Таблица комплектующих и расходных материалов",
      },
      technical_info: {
        title: "Технические данные",
        src: "technical_info.jpg",
        alt: "Таблица с техническими данными",
      },
      assembled_table: {
        title: "Строгач в сборе",
        src: "assembled_table.jpg",
        alt: "Таблица с типами строгачей в сборе",
      },
      assembled_img: {
        src: "assembled_img.jpg",
        alt: "Общий вид строгача в сборе",
      },
    },
  },
  quick_couplings: {
    label: "Быстросъемные соединения",
    description:
      "В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований. А ещё элементы политического процесса смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.\n\nОднозначно, базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что интерактивные прототипы объективно рассмотрены соответствующими инстанциями.",
    images: {
      table_0: {
        src: "table_0.jpg",
        alt: "Сводная таблица с быстросъемными соединениями, часть 1",
      },
      table_1: {
        src: "table_1.jpg",
        alt: "Сводная таблица с быстросъемными соединениями, часть 2",
      },
    },
  },
  bayonet_connectors: {
    label: "Байонетные разъемы",
    description:
      "В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований. А ещё элементы политического процесса смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.\n\nОднозначно, базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что интерактивные прототипы объективно рассмотрены соответствующими инстанциями.",
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
  },
  others: {
    label: "Прочие акссессуары",
    description:
      "В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований. А ещё элементы политического процесса смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.\n\nОднозначно, базовые сценарии поведения пользователей, превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали. И нет сомнений, что интерактивные прототипы объективно рассмотрены соответствующими инстанциями.",
  },
};
