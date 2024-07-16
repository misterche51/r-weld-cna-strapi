import { TTorchesDB } from "./declarations";
import { TORCHES_MIG_DB } from "./classes/mig/db";
import { TORCHES_TIG_DB } from "./classes/tig/db";


export const TORCHES_DB: TTorchesDB = {
  label: "Ручные горелки",
  type: "hand_torches",
  description: {
    advantages: {
      label: 'Преимущества',
      text: `Срок службы выше аналогов за счёт производства
            по международным стандартам и немецким технологиям. 
            Эргономичный дизайн облегчает работу сварщика и уменьшает
            усталость рук. Все ручные горелки R-Weld тщательно
            тестируются, что сводит риск брака к минимуму. Износостойкость
            и долговечность запасных частей обеспечивают экономию бюджета
            предприятия и оптимизацию складских запасов.`
    },
    usage: {
      label:'Применение',
      text: `Наши горелки используются во всех сферах промышленности:
        от автомобилестроения и производства металлоконструкций,
        до судостроения и инновационных технологий.`
    }
  },
  target: "production/hand_torches",
  data: {
    classes: {
      mig: TORCHES_MIG_DB,
      tig: TORCHES_TIG_DB, 
    }
  }
};
