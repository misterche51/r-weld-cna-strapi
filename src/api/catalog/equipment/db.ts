import { TEquipmentDB } from "./declarations"

export const EQUIPMENT_DB: TEquipmentDB = {
  label: "Оборудование и прочее",
  type: "others",
  target: "production/equipment_and_other",
  data: {
    welding_sources: {
      label: "Сварочные источники",
      description: "",
      target: "welding_sources", 
      category_image: "",
      list: [ {
          name: "Спрей пистолетный BINZEL",
          image: {
            src: "",
            alt: "",
          },
          info: "Препятствует налипанию брызг, увеличивает ресурс наконечника, вставки и сопла. Не содержит силикон фрионов и других озоноразрушающих веществ. Содержание: 400 мл (уп. 12 шт.)",
        }],
      tags: ["спрей", "пистолетный", "binzel"],
    },
    smoke_exhaust_systems: {
      label: "Дымовытяжные установки",
      description: "",
      target: "smoke_exhaust_systems",
      category_image: "",
      list: [ {
          name: "Спрей пистолетный BINZEL",
          image: {
            src: "",
            alt: "",
          },
          info: "Препятствует налипанию брызг, увеличивает ресурс наконечника, вставки и сопла. Не содержит силикон фрионов и других озоноразрушающих веществ. Содержание: 400 мл (уп. 12 шт.)",
          
        }],
        tags: ["спрей", "пистолетный", "binzel"],
    },
    other: {
      label: "Прочее", 
      description: "",
      target: "other", 
      category_image: "",
      list: [ {
          name: "Спрей пистолетный BINZEL",
          image: {
            src: "",
            alt: "",
          },
          info: "Препятствует налипанию брызг, увеличивает ресурс наконечника, вставки и сопла. Не содержит силикон фрионов и других озоноразрушающих веществ. Содержание: 400 мл (уп. 12 шт.)",
        }],
        tags: ["спрей", "пистолетный", "binzel"],
  },
  }
    
}