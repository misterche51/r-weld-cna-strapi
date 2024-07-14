export type TTorchesItem = {
  name: string;
  image: string;
  co2: string;
  gas: string;
  pv: string;
  wire: string;
};

export type TTorchesType =
  | "mig_rf_air"
  | "mig_mb_air"
  | "mig_mb_liquid"
  | "mig_r-weld_air"
  | "mig_r-weld_liquid"
  | "tig_abitig_air"
  | "tig_abitig_liquid"
  | "tig_r-weld_air"
  | "tig_r-weld_liquid";

type TTorchesCategoryData =  { label: string; list: TTorchesItem[] }

export type TTorchesDB = {
  label: string,
  type: string,
  target: string,
  data: Record<
    TTorchesType,
    TTorchesCategoryData
  >
};
