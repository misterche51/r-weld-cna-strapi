type TPhoneLinkData = {
  label: string;
  href: string;
};

export type TContactsItem = {
  id: number;
  city: string;
  address: string;
  phone: TPhoneLinkData;
  email: string;
  delivery: string;
  promo?: string;
};
