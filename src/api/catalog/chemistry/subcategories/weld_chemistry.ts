import { TImageData, IChemistryCategoryDB } from "../declarations";


type TWeldChemistryItem = {
  name: string;
  image: TImageData;
  info?: string;
  
};

export interface IWeldChemistryDB extends IChemistryCategoryDB {
  data: TWeldChemistryItem[];
}


export const WELD_CHEMISTRY_CATALOG_DATA: IWeldChemistryDB = {
    routing: {
      label: "Сварочная химия", 
      target: "weld_chemistry", 
      absoluteTarget: "/production/chemistry/weld_chemistry",
      image: "weld_chemistry.png" 
    },
    header: {
      label: "Сварочная химия",
      description:
        "Сварочная химия R-Weld разработана специально для повышения эффективности, производительности и безопасности ваших сварочных процессов. Ассортимент продукции включает: керамические защитные спреи без силикона для автоматизированной и продолжительной сварки, невоспламеняющиеся спреи для защиты деталей горелки от брызг, многофункциональные защитные средства, совместимые со всеми видами сварки, специализированные хладагенты для жидкостно охлаждаемых сварочных и режущих установок, обеспечивающие эффективное охлаждение и защиту от окисления.\n\nВсе наши продукты соответствуют высоким стандартам качества и безопасности, разработаны для обеспечения оптимальной производительности и продления срока службы вашего сварочного оборудования\n\nВыбирая сварочную химию и аксессуары R-Weld, вы инвестируете в профессиональные решения, которые повысят качество и эффективность вашей сварочной работы.",
  
    },
    data: [
      {
        name: "Спрей пистолетный BINZEL",
        image: {
          src: "",
          alt: "",
        },
        info: "Препятствует налипанию брызг, увеличивает ресурс наконечника, вставки и сопла. Не содержит силикон фрионов и других озоноразрушающих веществ. Содержание: 400 мл (уп. 12 шт.) арт.192.0213",
      },
      {
        name: "Спрей керамический",
        image: {
          src: "",
          alt: "",
        },
        info: "Произведён по особой технологии и не содержит силикона. Этот недавно разработанный защитный спрей особенно подходит для автоматизированных и продолжительных процессов сварки. Содержание: 400 мл (уп. 12 шт.)",
      },
      {
        name: "Паста “Дюзофикс”",
        image: {
          src: "",
          alt: "",
        },
        info: "Препятствует налипанию брызг, увеличивает ресурс наконечника, вставки и сопла. Содержание: 300 мл",
      },
      {
        name: "Средство против налипания брызг ROBO",
        image: {
          src: "",
          alt: "",
        },
        info: "Увеличивает ресурс наконечника, вставки и сопла.",
      },
      {
        name: "Эмульсия ABIBLUE NF - защита от сварочных брызг",
        image: {
          src: "",
          alt: "",
        },
        info: "Используется со всеми видами сварки, в том числе с лазерной и плазменной резкой. Защищает свариваемые поверхности, не влияет на последующие процессы покрытия (лакокраски, оцинковки и т.д.) Защищает от повышенного ввода водорода при сварке алюминия. Канистра 10 л",
      },
      {
        name: "Охлаждающий агент BTC-20 NF",
        image: {
          src: "",
          alt: "",
        },
        info: "Специальное охлаждающее средство ABICOR BINZEL®, морозоустойчивость до -17°С для всех жидкостно охлаждаемых установок сварки и резки. 5 литров",
       
      },
{
        name: "Охлаждающий агент BTC-50 NF",
        image: {
          src: "",
          alt: "",
        },
        info: "Специальное охлаждающее средство ABICOR BINZEL®, морозоустойчивость до -45°С для всех жидкостно охлаждаемых установок сварки и резки. 5 литров",
      },
    ],
  };
    
WELD_CHEMISTRY_CATALOG_DATA.tags = WELD_CHEMISTRY_CATALOG_DATA.data.reduce(
  (acc, curr) => { 
    return [...acc, ...curr.name.split(' '), curr.name, ...curr.info!.split(' ')]
  }, ['300', 'средство'] ).map(tag => tag.toLowerCase().replace(' ', '+'))