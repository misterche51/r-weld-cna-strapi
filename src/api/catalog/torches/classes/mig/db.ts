import { TTorchesClass } from "../../declarations";

import { MIG_MB_AIR } from "./categories/mig_mb_air";
import { MIG_MB_LIQUID } from "./categories/mig_mb_liquid";
import { MIG_R_WELD_AIR } from "./categories/mig_r-weld_air";
import { MIG_R_WELD_LIQUID } from "./categories/mig_r-weld_liquid";
import { MIG_RF_AIR } from "./categories/mig_rf_air";

export const TORCHES_MIG_DB:TTorchesClass = {
    label: "Сварочные горелки MIG",
    image: "mig.jpg",
    categories: {
      "Воздушное охлаждение": [
        {
          label: "RF",
          target: "mig_rf_air",
          absoluteTarget: "/production/hand_torches/mig_rf_air",
          data: MIG_RF_AIR,
          //@ts-expect-error
          tags: [...MIG_RF_AIR.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, []).map(tag => tag.toLowerCase().replace(' ', '+')), 'grip+15', 'grip', 'rf+grip', 'rf+25', 'рф+25', 'rf+26', 'рф+26', 'rf+36', 'рф+36', 'rf+45', 'рф+45', 'горелка+rf', 'горелка+рф', 'rf15', 'рф15', 'rf25', 'рф25', 'rf26', 'рф26', 'rf36', 'рф36', 'rf45', 'рф45']
        },
        {
          label: "MB",
          target: "mig_mb_air",
          absoluteTarget: "/production/hand_torches/mig_mb_air",
          data: MIG_MB_AIR,
          //@ts-expect-error
          tags: [...MIG_MB_AIR.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, []).map(tag => tag.toLowerCase().replace(' ', '+')), 'mb', 'мб', 'мв', 'mb+25', 'мб+25', 'mb+26', 'мб+26', 'mb+36', 'мб+36', 'mb+15', 'мб+15','mb+evo', 'мб+ево', 'mb+evo+25', 'мб+ево+25', 'mb+evo+26', 'мб+ево+26', 'mb+evo+36', 'мб+ево+36', 'mb+evo+15', 'мб+ево+15', 'мб+эво', 'мб+эво+25', 'мб+эво+26', 'мб+эво+36', 'мб+эво+15', 'горелка+mb+evo', 'горелка+мб+ево', 'горелка+мбево', 'горелка+мб+эво', 'горелка+мбэво', 'горелка+mbevo', 'mb15', 'мб15', 'mb25', 'мб25', 'mb26', 'мб26', 'mb36', 'мб36']
        },
        {
          label: "R-WELD",
          target:"not-found",
          // target: "mig_r-weld_air",
          absoluteTarget: "/production/hand_torches/mig_r-weld_air",
          data: MIG_R_WELD_AIR,
          
          // tags: MIG_R_WELD_AIR.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, []).map(tag => tag.toLowerCase().replace(' ', '+'))
          tags: ['']
        },
      ],
      "Жидкостное охлаждение": [
        {
          label: "MB",
          target: "mig_mb_liquid",
          absoluteTarget: "/production/hand_torches/mig_mb_liquid",
          data: MIG_MB_LIQUID,
          //@ts-expect-error
          tags: MIG_MB_LIQUID.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, []).map(tag => tag.toLowerCase().replace(' ', '+'))
        },
        {
          label: "R-WELD",
          target:"not-found",
          // target: "mig_r-weld_liquid",
          absoluteTarget: "/production/hand_torches/mig_r-weld_liquid",
          data: MIG_R_WELD_LIQUID,
     
          // tags: MIG_R_WELD_LIQUID.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, []).map(tag => tag.toLowerCase().replace(' ', '+'))
          tags: ['']
        },
      ],
    },
};


