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
          tags: MIG_RF_AIR.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, []).map(tag => tag.toLowerCase().replace(' ', '+'))
        },
        {
          label: "MB",
          target: "mig_mb_air",
          absoluteTarget: "/production/hand_torches/mig_mb_air",
          data: MIG_MB_AIR,
          //@ts-expect-error
          tags: MIG_MB_AIR.list.reduce((acc, curr) => {return [...acc, ...curr.name.split(' '), curr.name]}, []).map(tag => tag.toLowerCase().replace(' ', '+'))
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


