import { ITungstenElectrodesDB } from "./subcategories/tungsten_electrodes";
import { IBayonetConnectorsDB } from "./subcategories/bayonet_connectors";
import { IWeldChemistryDB } from "./subcategories/weld_chemistry";
import { IQuickCouplingsDB } from "./subcategories/quick_couplings";
import { IPlanersDB } from "./subcategories/planers";
import { ICarbonElectrodesDB } from "./subcategories/carbon_electrodes";
import { IElectricalHoldersDB } from "./subcategories/electrical_holders";

export type TRountingInfo = {
  label: string;
  target: string;
  image?: string;
}

export type TChemistrySectionHeader = {
  label: string;
  description?: string;
};

export type TChemistrySectionContent = {
  images: Record<string, { src: string; alt: string; title?: string }>;
};

export type TImageData = {
  src: string;
  alt: string;
};




export interface IChemistryCategoryDB {
  routing: TRountingInfo;
  header: TChemistrySectionHeader;
}





export type TChemistryCatalog = {
  weld_chemistry: IWeldChemistryDB;
  electrical_holders: IElectricalHoldersDB;
  carbon_electrodes: ICarbonElectrodesDB;
  planers: IPlanersDB;
  quick_couplings: IQuickCouplingsDB;
  tungsten_electrodes: ITungstenElectrodesDB ;
  bayonet_connectors: IBayonetConnectorsDB;
  other_accessories: IChemistryCategoryDB;
};

export type TChemistryDB = {
  label: string,
  type: string,
  target: string,
  data: TChemistryCatalog,
}
