import { TTorchesClass } from "../../declarations";

import { TIG_R_WELD_AIR } from "./categories/tig_r-weld_air";
import { TIG_R_WELD_LIQUID } from "./categories/tig_r-weld_liquid";

export const TORCHES_TIG_DB:TTorchesClass = {
    label: "Сварочные горелки TIG",
    image: "tig",
    categories: {
      "Воздушное охлаждение": [
        {
          label: "R-WELD",
          target: "tig_r-weld_air",
          data: TIG_R_WELD_AIR
        },
    ],
      "Жидкостное охлаждение": [
        {
          label: "R-WELD",
          target: "tig_r-weld_liquid",
          data: TIG_R_WELD_LIQUID
        },
      ],
    },    
}