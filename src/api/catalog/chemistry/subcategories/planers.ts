import { IChemistryCategoryDB, TChemistrySectionContent } from "../declarations";

export interface IPlanersDB extends IChemistryCategoryDB {
  data: TChemistrySectionContent;
}

export const PLANERS_CATALOG_DATA : IPlanersDB = {
    routing: { label: "Строгачи", target: "planers", image: "" },
    header: {
      label: "Строгачи",
      description:
        "Строгачи R-Weld обеспечивают долговечность и точность при обработке швов, устранении дефектов и подготовке металла благодаря своей высокопрочной конструкции.\nВсе представленные в каталоге строгачи оснащены эргономичными рукоятками с термоизоляцией и гибким кабелем для комфорта и безопасности. Высокая пропускная способность воздуха наших строгачей гарантирует оптимальные рабочие характеристики, снижая время обработки и повышая эффективность.",
  
    },
    data: {
      images: {
        scheme: {
          title: "K 10 / K 12 / K 12 T / K 16 / K 16 T/ K 20",
          src: "scheme.jpg",
          alt: "Строгач в разобранном виде",
        },
        components: {
          title: "Комплектующие и расходные материалы",
          src: "components.jpg",
          alt: "Таблица комплектующих и расходных материалов",
        },
        technical_info: {
          title: "Технические данные",
          src: "technical_info.jpg",
          alt: "Таблица с техническими данными",
        },
        assembled_table: {
          title: "Строгач в сборе",
          src: "assembled_table.jpg",
          alt: "Таблица с типами строгачей в сборе",
        },
        assembled_img: {
          src: "assembled_img.jpg",
          alt: "Общий вид строгача в сборе",
        },
      },
    }
    
  }