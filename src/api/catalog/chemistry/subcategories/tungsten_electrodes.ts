import { IChemistryCategoryDB, TImageData } from "../declarations";

type TTungstenElectrodesContent = {
  image: TImageData & { description: string };
};

export interface ITungstenElectrodesDB extends IChemistryCategoryDB {
  data: TTungstenElectrodesContent;
}

export const TUNGSTEN_ELECTRODES_CATALOG_DATA: ITungstenElectrodesDB = {
    routing: {
      label: "Вольфрамовые электроды",
      target: "tungsten_electrodes",
      absoluteTarget: "/production/chemistry/tungsten_electrodes",
      image: "tungsten_electrodes.jpg",
    },
    header: {
      label: "Вольфрамовые электроды",
    },
    data: {
      image: {
        src: "",
        alt: "Вольфрамовые электроды",
        description:
          "Электроды с добавкой оксида лантана универсальные и применяются почти во всех областях сварки DC и АС. Главное применение они находят при сварке не — и высоколегированных сталей как и сплавов алюминия, никеля, меди и магнезия. Дальше они используются при микроплазменной сварке. Благодаря хорошим свойствам поджига идеально подходят для автоматической сварки.\nЦветная маркировка:\nWL 10 = чёрный / WL 15 = золотой / WL 20 = синий.\n\nУниверсальные электроды практически для всех процессов сварки TIG, не радиоактивны. Благодаря добавке оксида церия (СеО2) электроды данного типа обладают рабочими свойствами, схожими с WТ электродами. Применяются для сварки нелегированных и высоколегированных сталей, алюминия, титана, никеля, меди и сплавов магния в режимах DC и AС.\nЦветная маркировка:\nWC 20 = серый.\n\nВольфрамовые электроды с добавкой циркония уменьшают опасность попадания вольфрама в сварной шов. Область применения данных электродов является сварка переменным током (АС). Цветная маркировка: WZ 08 = белый. Электроды без добавок состоящие из чистого вольфрама. Главной областью применения этих электродов является сварка переменным током (АС) сплавов алюминия при хорошей устойчивости дуги. Электроды WP не пригодны для сварки прямым током (DC).\nЦветная маркировка:\nWP = зелёный",
      }
    },
  }

  TUNGSTEN_ELECTRODES_CATALOG_DATA.tags = ['Вольфрамовые электроды', 'Вольфрамовые','электроды', ...TUNGSTEN_ELECTRODES_CATALOG_DATA.data.image.description.replace('.', '').split(' ')].map(tag => tag.toLowerCase().replace(' ', '+'))
