import { IChemistryCategoryDB } from "../declarations";

export const OTHER_ACCESSORIES_CATALOG_DATA: IChemistryCategoryDB = {
    routing: { 
      label: "Прочие аксессуары", 
      target: 'not-found',
      // target: "other_accessories",
      absoluteTarget: "/production/chemistry/other_accessories",
      image: "other_accessories.png" },
    header: {
      label: "Прочие акссессуары",
      description:
        "Как один из лидеров среди российских производителей и поставщиков сварочного оборудования, R-Weld предлагает полный спектр аксессуаров, которые повысят эффективность вашего производства на каждом этапе.\n\nМы понимаем важность надёжных аксессуаров, поэтому наша продукция изготовлена в соответствии с высочайшими стандартами. Наша команда с 15-тилетним опытом в отрасли сварки поможет вам на каждом этапе.\n\nДоверьтесь нам, чтобы обеспечить ваше производство всем необходимым для достижения наилучших результатов.\nМы решаем все задачи производства, чтобы вы могли сосредоточиться на главном — качественной сварке.\nСвяжитесь с нами сегодня, чтобы обсудить ваши потребности и получить индивидуальные решения.",
    },
    tags: ['']
    
  }

  OTHER_ACCESSORIES_CATALOG_DATA.tags = [...OTHER_ACCESSORIES_CATALOG_DATA.tags!, ...OTHER_ACCESSORIES_CATALOG_DATA.header.description!.split(' ')]