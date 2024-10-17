import { DEALERS_DB, DEALERS_TAGS } from "../dealers";
import { TContactsItem } from "./declarations";

export const CONTACTS_DB: TContactsItem[] = [
  {
    id: 0,
    location: {
      center: [39.82476, 54.72464],
      zoom: 15,
    },
    city: "Рязань",
    address:
      "390525, Рязанская обл., Рязанский р-н, с. Поляны, ул. Новая, строение 15, офис 1",
    phones: [
      {
        label: "(4912) 293-493",
        href: "+74912293493",
      },
    ],
    email: "office-rzn@r-weld.ru",
  },
  {
    id: 1,
    location: {
      center: [37.665165, 55.851606],
      zoom: 12,
    },
    city: "Москва",
    address: "129343, г. Москва, ул. Уржумская, д. 4",
    phones: [
      {
        label: "(495) 221-84-81",
        href: "+74952218481",
      },
      {
        label: "(495) 221-84-82",
        href: "+74952218482",
      },
    ],
    email: "office-msc@r-weld.ru",
  },
  {
    id: 2,
    location: { center: [30.28793, 59.859876], zoom: 12 },
    city: "Санкт-Петербург",
    address:
      "198152, г. Санкт-Петербург, ул. Краснопутиловская, д. 69, оф. 134В",
    phones: [
      {
        label: "+7 (911) 934-55-44",
        href: "+79119345544",
      },
    ],
    email: "office-spb@r-weld.ru",
  },
  {
    id: 3,
    location: {
      center: [60.671972, 56.81841],
      zoom: 12,
    },
    city: "Екатеринбург",
    address: "620030, г. Екатеринбург, ул. Карьерная, д. 2, оф. 501",
    phones: [
      {
        label: "+7 (343) 270-21-17",
        href: "+73432702117",
      },
    ],
    email: "office-ekb@r-weld.ru",
  },
  {
    id: 4,
    location: {
      center: [92.826835, 56.046735],
      zoom: 12,
    },
    city: "Красноярск",
    address: "660048, г. Красноярск, ул. Маерчака, д. 109м , оф. 208",
    phones: [
      {
        label: "+7 (920) 630 50-13",
        href: "+79206305013",
      },
      {
        label: "+7 (930) 888-35-28",
        href: "+79308883528",
      },
    ],
    email: "office-krsk@r-weld.ru",
  },
  {
    id: 5,
    location: {
      center: [39.718813, 47.222109],
      zoom: 12,
    },
    city: "Ростов-на-Дону",
    address: "Торговый представитель Александр Митько",
    phones: [
      {
        label: "+7 (930) 880 34-80",
        href: "+79308803480",
      },
    ],
    email: "mitko@r-weld.ru ",
  },
];

const CONTACTS_TAGS = CONTACTS_DB.map(({ city }) => city.toLowerCase());

type TContactsPageDB = {
  contacts: {
    label: string;
    description?: string;
    data: typeof CONTACTS_DB;
  };
  dealers: {
    label: string;
    data: typeof DEALERS_DB;
  };
  tags: string[];
};

export const CONTACTS_PAGE_DB: TContactsPageDB = {
  contacts: {
    label: "Контакты",
    description:
      "Наличие филиалов и собственных складов в Москве, Санкт-Петербурге, Екатеринбурге, Красноярске и Рязани и торгового представителя в Ростове-на-Дону, а так же обширная дилерская сеть позволяют создать индивидуальные условия доставки и оплаты для каждого клиента.",
    data: CONTACTS_DB,
  },
  dealers: {
    label: "Дилеры",
    data: DEALERS_DB,
  },
  tags: [...DEALERS_TAGS, ...CONTACTS_TAGS],
};
