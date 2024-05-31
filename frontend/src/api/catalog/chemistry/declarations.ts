export type TChemistrySectionHeader = {
  label: string;
  description?: string;
};
export type TChemistrySectionContent = {
  images: Record<string, { src: string; alt: string; title?: string }>;
};

type TChemistrySectionData = TChemistrySectionHeader & TChemistrySectionContent;

type TImageData = {
  src: string;
  alt: string;
};

type TBayonetConnectorsTechInfoSection = {
  title: string;
  image: TImageData;
  table: {
    heading: string;
    rows: string[];
  };
};

type TBayonetConnectorsSystemsTable = {
  heading: string;
  rows: { label: string; number: string }[];
};
type TBayonetConnectorsSystemsSection = {
  title: string;
  sections: {
    image: TImageData;
    tables: TBayonetConnectorsSystemsTable[];
  }[];
};

type TBayonetConnectorsContent = {
  data: {
    technical_info: TBayonetConnectorsTechInfoSection;
    systems: TBayonetConnectorsSystemsSection;
  };
};

type TTungstenElectrodesContent = {
  image: TImageData & { description: string };
};

type TTagsList = { tags: string[] };
type TWeildChemistyItem = {
  name: string;
  image: TImageData;
  info?: string;
} & TTagsList;

type TWeldChemistrySectionData = TChemistrySectionHeader & {
  list: TWeildChemistyItem[];
};
export type TChemistryDB = {
  weld_chemistry: TWeldChemistrySectionData;
  electrical_holders: TChemistrySectionData & TTagsList;
  carbon_electrodes: TChemistrySectionData;
  planers: TChemistrySectionData;
  quick_couplings: TChemistrySectionData;
  tungsten_electrodes: TChemistrySectionHeader & TTungstenElectrodesContent;
  bayonet_connectors: TChemistrySectionHeader & TBayonetConnectorsContent;
  other_accessories: TChemistrySectionHeader;
};
