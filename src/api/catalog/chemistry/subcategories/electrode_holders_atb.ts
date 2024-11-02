import { IChemistryCategoryDB, TChemistrySectionContent} from "../declarations"


export interface IElectrodeATBHoldersDB extends IChemistryCategoryDB {
  data: TChemistrySectionContent;
  header: {
    label: string,
    description: string,
    list: string[]
  }
}


export const ELECTRODE_HOLDERS_ATB_CATALOG_DATA: IElectrodeATBHoldersDB = {
  routing:  { 
    label: "Электрододержатели ATB", 
    target: "electrode_holders_atb", 
    absoluteTarget: "/production/chemistry/electrode_holders_atb",
    image: "electrode_holders_atb.png" 
  },
  header: {
    label: "Электрододержатели ATB300 / ATB400 / ATB500 / ATB600",
    description:
      "Надёжная классика... \n\nЭлектрододержатели используются для ручной сварки электродами с покрытием. Ручная электродная сварка является одной из старейших и наиболее распространенных в настоящее время операций дуговой сварки. Она выделяется возможностью низких инвестиций в оборудование, а также её универсальными применениями. \n\nЛинейка электрододержателей ATB, благодаря своей чрезвычайно прочной конструкции, является идеальным инструментом для наружных работ, а также для работ на верфях, металлоконструкциях, строительстве трубопроводов и т.д.\n\nОсновные особенности:",
    list: ['Ручка quick lock – практичная установка.', 
      'Латунный корпус – электрододержатели ATB имеют прочный\n\nлатунный корпус, гарантирующий большую токопроводимость',
      'Медная втулка и шестигранный ключ для фиксации кабеля.',
      'Защита рычажной пружины.'
      ]
  },
  data: {
    images: {
      worker: {
        src: "worker.png",
        alt: "Работник использует электрододержатель atb",
      },
      table: {
        src: "table.png",
        alt: "Таблица доступных к заказу электрододержателей atb",
      },
    },
  },
  tags: ['держатель', 'электродержатель', 'электрододержатель', 'держак','держатели', 'Электрододержатели', 'электрододержатели', 'держаки', 'ATB300', 'atb', 'ATB400', 'ATB500', 'ATB600', 'ATB+300',  'ATB+400', 'ATB+500', 'ATB+600'].map(tag => tag.toLowerCase().replace(' ', '+'))
}

ELECTRODE_HOLDERS_ATB_CATALOG_DATA.tags = [...ELECTRODE_HOLDERS_ATB_CATALOG_DATA.tags!, ...ELECTRODE_HOLDERS_ATB_CATALOG_DATA.header.description!.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,' ').split(' ')]
