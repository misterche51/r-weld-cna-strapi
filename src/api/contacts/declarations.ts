import type { YMapLocationRequest } from "ymaps3";
type TPhoneLinkData = {
  label: string;
  href?: string;
};

export type TContactsItem = {
  id: number;
  location: YMapLocationRequest;
  city: string;
  address: string;
  phones: TPhoneLinkData[];
  email: string;
  delivery?: string;
  promo?: string;
};
