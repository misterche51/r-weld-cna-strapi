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
      { label: "Электродержатели" },
      { label: "Угольные электроды" },
      { label: "Строгачи" },
      { label: "Вольфрамовые электроды" },
      { label: "Байонетные разъемы" },
      { label: "Быстросъемные соединения" },
      { label: "Прочие аксессуары" },
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

export const CHEMISTRY_DB = {
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
};
