import { TTorchesClass } from "../../declarations";

import { MIG_MB_AIR } from "./categories/mig_mb_air";
import { MIG_MB_LIQUID } from "./categories/mig_mb_liquid";
import { MIG_R_WELD_AIR } from "./categories/mig_r-weld_air";
import { MIG_R_WELD_LIQUID } from "./categories/mig_r-weld_liquid";
import { MIG_RF_AIR } from "./categories/mig_rf_air";

export const TORCHES_MIG_DB:TTorchesClass = {
    label: "Сварочныыыые горелки MIG",
    image: "mig",
    categories: {
      "Воздушное охлаждение": [
        {
          label: "RF",
          target: "mig_rf_air",
          data: MIG_RF_AIR
        },
        {
          label: "MB",
          target: "mig_mb_air",
          data: MIG_MB_AIR
        },
        {
          label: "R-WELD",
          target: "mig_r-weld_air",
          data: MIG_R_WELD_AIR
        },
      ],
      "Жидкостное охлаждение": [
        {
          label: "MB",
          target: "mig_mb_liquid",
          data: MIG_MB_LIQUID
        },
        {
          label: "R-WELD",
          target: "mig_r-weld_liquid",
          data: MIG_R_WELD_LIQUID
        },
      ],
    },
};


