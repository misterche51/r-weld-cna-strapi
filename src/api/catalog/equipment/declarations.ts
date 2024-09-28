type TEquipmetCategoryData = {
  label: string,
  description:  string,
  target:  string, 
  category_image:  string,
  list: any[],
  tags: string[]
}
export type TEquipmentDB = {
  label: string,
  type: string,
  target: string,
  data: Record<
    string,
    TEquipmetCategoryData
  >
};
