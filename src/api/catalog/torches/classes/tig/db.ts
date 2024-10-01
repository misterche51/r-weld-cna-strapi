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
          data: TIG_R_WELD_AIR,
          tags: TIG_R_WELD_AIR.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, ['tig', 'rwtig','воздушный', "воздушное", 'воздушное охлаждение']).map(tag => tag.toLowerCase().replace(' ', '+'))

        },
    ],
      "Жидкостное охлаждение": [
        {
          label: "R-WELD",
          target: "tig_r-weld_liquid",
          absoluteTarget: "/production/hand_torches/tig_r-weld_liquid",
          data: TIG_R_WELD_LIQUID,
          tags: TIG_R_WELD_LIQUID.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, ['tig', 'rwtig','жидкостной', 'жидкостный']).map(tag => tag.toLowerCase().replace(' ', '+'))

        },
      ],
    },    
}