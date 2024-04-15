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

type TDataBase = {
  posts: TPostItem[];
  contacts: TContactsItem[];
  dealers: TRegionItem[];
  catalog: Record<string, any>;
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
      { label: "Сварочная химия" },
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
  },
};
export default DB;
