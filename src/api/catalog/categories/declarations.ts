import { TBreadcrumbItem } from "@/app/shared";

type TCatalogCategoriesItem = {
  label: string;
  type?: string;
  target: string;
};

export type TCatalogCategoriesDB = TCatalogCategoriesItem[];
