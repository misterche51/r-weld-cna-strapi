type TDealerItem = {
  name: string;
  phone?: string;
  address?: string;
  email?: string;
  site?: string;
};

export type TRegionItem = {
  region: string;
  list: TDealerItem[];
};
