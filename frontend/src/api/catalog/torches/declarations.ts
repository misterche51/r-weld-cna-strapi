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
  | "mig_rf_liquid"
  | "mig_mb_air"
  | "mig_mb_liquid"
  | "mig_r-weld_air"
  | "mig_r-weld_liquid"
  | "tig_abitig_air"
  | "tig_abitig_liquid"
  | "tig_r-weld_air"
  | "tig_r-weld_liquid";

export type TTorchesDB = Record<
  TTorchesType,
  { label: string; list: TTorchesItem[] }
>;
