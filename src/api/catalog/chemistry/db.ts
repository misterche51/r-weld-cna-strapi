import { WELD_CHEMISTRY_CATALOG_DATA } from "./subcategories/weld_chemistry";
import { ELECTRODE_HOLDERS_DE_CATALOG_DATA } from "./subcategories/electrode_holders_de";
import { ELECTRODE_HOLDERS_ATB_CATALOG_DATA } from "./subcategories/electrode_holders_atb";
import { CARBON_ELECTRODES_CATALOG_DATA } from "./subcategories/carbon_electrodes";
import { PLANERS_CATALOG_DATA } from "./subcategories/planers";
import { QUICK_COUPLINGS_CATALOG_DATA } from "./subcategories/quick_couplings";
import { TUNGSTEN_ELECTRODES_CATALOG_DATA } from "./subcategories/tungsten_electrodes";
import { BAYONET_CONNECTORS_CATALOG_DATA } from "./subcategories/bayonet_connectors";
import { OTHER_ACCESSORIES_CATALOG_DATA } from "./subcategories/other_accessories";

import { TChemistryDB } from "./declarations";

export const CHEMISTRY_DB: TChemistryDB = {
  label: "Сварочная химия и аксессуары",
  type: "materials",
  target: "production/chemistry",
  data: {
    weld_chemistry: WELD_CHEMISTRY_CATALOG_DATA,
    electrode_holders_de: ELECTRODE_HOLDERS_DE_CATALOG_DATA,
    electrode_holders_atb: ELECTRODE_HOLDERS_ATB_CATALOG_DATA,
    carbon_electrodes: CARBON_ELECTRODES_CATALOG_DATA,
    planers: PLANERS_CATALOG_DATA,
    quick_couplings: QUICK_COUPLINGS_CATALOG_DATA,
    tungsten_electrodes: TUNGSTEN_ELECTRODES_CATALOG_DATA,
    bayonet_connectors: BAYONET_CONNECTORS_CATALOG_DATA,
    other_accessories: OTHER_ACCESSORIES_CATALOG_DATA,
  }
};

