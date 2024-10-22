import { TTorchesClass } from "../../declarations";

import { TIG_R_WELD_AIR } from "./categories/tig_r-weld_air";
import { TIG_R_WELD_LIQUID } from "./categories/tig_r-weld_liquid";

export const TORCHES_TIG_DB : TTorchesClass = {
    label: "Сварочные горелки TIG",
    image: "tig.jpg",
    categories: {
      "Воздушное охлаждение": [
        {
          label: "R-WELD",
          target: "tig_r-weld_air",
          absoluteTarget: "/production/hand_torches/tig_r-weld_air",
          searchResultLabel: 'Сварочные горелки TIG R-WELD c воздушным охлаждением',
          data: TIG_R_WELD_AIR,
          tags: TIG_R_WELD_AIR.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, ['tig', 'rwtig', 'тиг', 'рвтиг','воздушный', "воздушное", 'воздушная', 'горелка+воздушная', 'горелка+тиг', 'воздушное+охлаждение', 'горелка+воздушное+охлаждение', 'rwtig+9', 'rwtig+17', 'rwtig+26', 'rwtig+200', 'tig+9', 'tig+17', 'tig+26', 'tig+200', 'рвтиг+9', 'рвтиг+17', 'рвтиг+26', 'рвтиг+200', 'rwtig9', 'rwtig17', 'rwtig26', 'rwtig200', 'тиг9', 'тиг17', 'тиг26', 'тиг200', 'рвтиг9', 'рвтиг17', 'рвтиг26', 'рвтиг200', 'тиг+9', 'тиг+17', 'тиг+26', 'тиг+200', '9', '17', '6', '200']).map(tag => tag.toLowerCase().replace(' ', '+'))

        },
    ],
      "Жидкостное охлаждение": [
        {
          label: "R-WELD",
          target: "tig_r-weld_liquid",
          absoluteTarget: "/production/hand_torches/tig_r-weld_liquid",
          searchResultLabel: 'Сварочные горелки TIG R-WELD c жидкостным охлаждением',
          data: TIG_R_WELD_LIQUID,
          tags: TIG_R_WELD_LIQUID.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, ['tig', 'rwtig', 'тиг', 'рвтиг','жидкостной', 'жидкостный','жидкостная', "жидкостное", 'горелка+жидкостная','водянойой', 'водяная','водяное+охлаждение', "водяное", 'горелка+водяная','горелка+водяное+охлаждение', 'горелка+тиг', 'rwtig+18', 'rwtig+18SC', 'rwtig+18+SC', 'rwtig+20', 'rwtig+450', 'rwtig+450+W', 'rwtig+450W', 'tig+18', 'tig+18SC', 'tig+18+SC', 'tig+20', 'tig+450', 'tig+450+W', 'tig+450W', 'tig18', 'tig18SC', 'tig18SC', 'tig20', 'tig450', 'tig450W', 'tig+450W', 'rwtig18', 'rwtig18SC', 'rwtig18SC', 'rwtig20', 'rwtig450', 'rwtig450W', 'rwtig+450W', '18', '18SC', '18+SC', '20', '450', '450+W', '450W', 'рвтиг+18', 'рвтиг+18SC', 'рвтиг+18+SC', 'рвтиг+20', 'рвтиг+450', 'рвтиг+450+W', 'рвтиг+450W', 'тиг+18', 'тиг+18SC', 'тиг+18+SC', 'тиг+20', 'тиг+450', 'тиг+450+W', 'тиг+450W', 'рвтиг18', 'рвтиг18SC', 'рвтиг18+SC', 'рвтиг20', 'рвтиг450', 'рвтиг450+W', 'рвтиг450W', 'тиг18', 'тиг18SC', 'тиг18+SC', 'тиг20', 'тиг450', 'тиг450+W', 'тиг+450W' ]).map(tag => tag.toLowerCase().replace(' ', '+'))

        },
      ],
    },    
}
