# Инструкция по наполеннию контентом:

[Документация](/src/api/documentation/db.ts):

Файл имеет вид коллекции сущностей, каждая из которых имеет вид:

*поля со * обязательны к заполнению*
```
{
    id*: уникальное число,
    label*: 'Отображаемое название документа',
    path*: 'ссылка на файл в яндекс.диске'
}
```
**ВНИМАНИЕ!**
*Первый файл в коллекции обязательно должен быть каталог текущего года, так как он берется для навигации в меню с первой позиции*

---

[Контакты](/src/api/contacts/db.ts): 

Файл имеет вид коллекции сущностей, каждая из которых имеет вид:

*поля со * обязательны к заполнению*
```
 {
    id*: уникальное число,
    location*: {
      center: [39.82476, 54.72464], координаты с яндекс карты, переставленные местами( что было первой стало второй и наоброт)
      zoom: 15, степень приближения карты
    },
    city*: "название города",
    address*:
      "полный адрес, сейчас стандарт такой
      390525, Рязанская обл., Рязанский р-н, с. Поляны, ул. Новая, строение 15, офис 1",
    phones*: [
      {
        label: "(4912) 293-493",
        href: "+74912293493",
      },
    ], коллекция из объектов телефонов, где label - 'отображаемый телефон', href - номер телефона
    email*: "адрес электронной почты",
  }
  ```

  ---

[Дилеры](/src/api/dealers/db.ts): 

Файл имеет вид коллекции сущностей регионов, каждая из которых имеет вид:

*поля со * обязательны к заполнению*
```
  {
    region*: "Область, край",
    list*: [
      {
        name*: "название организации, если нужны кавычки - вот «»",
        phone: "номер телефона",
        address:
          "адрес организации",
        email: "электронная почта",
        site: "сайт",
        city*: "название города с маленькой буквы",
      },
    ],
  },
```
---

[Блог](/src/api/blog/db.ts): 

Файл имеет вид коллекции сущностей регионов, каждая из которых имеет вид:

*поля со * обязательны к заполнению*
```
  {
    id*: уникальный номер статьи,
    previewTitle*: "Название статьи для превью (в списке)",
    articleTitle:
      "Название статьи, если не указывать, то возьмется из previewTitle",
    shortDescription*:
      "Краткое описание статьи",
    fullDescription:
      "Полное описание статьи. если не указывать, то возьмется из shortDescription",
    image: "имя файла изображения в формате название_изображения.формат",
    date*: "Дата публикации в формате : 2 марта 1992",
  }
```
[Папка с изображениями для блога](/public/blog)

---

## Каталог

### Сварочная химия
---
[Быстросъемные соединения](/src/api/catalog/chemistry/subcategories/quick_couplings.ts): 

*Здесь нет как такового каталога, поэтому файл состоит из заголовка, описания и объекта с изображениями **images**, каждое из которых имеет поле **src** и **alt***
```
{
    label: "Название раздела",
    description:
      "Описание раздела, для переноса со строки на строку использовать \n",
    images: {
      table_0: {
        src: "table_0.jpg", 
        alt: "Очень короткое описани содержимого изображения, пример в следующем объекте",
      },
      table_1: {
        src: "table_1.jpg",
        alt: "Сводная таблица с быстросъемными соединениями, часть 2",
      },
    },
  }
```
---

[Электродержатели](/src/api/catalog/chemistry/subcategories/electrical_holders.ts): 

*Здесь нет как такового каталога, поэтому файл состоит из заголовка, описания и объекта с изображениями **images**, каждое из которых имеет обязательные поля **src** и **alt**, а также может иметь поле **title***
```
{
    label: "Название раздела",
    description:
      "Описание раздела, для переноса со строки на строку использовать \n",
    images: {
      table: {
        src: "holders_table.jpg",
        alt: "Таблица каталога электродержателей",
      },
      scheme: {
        src: "holders_scheme.jpg",
        alt: "Устройство электродержателя схема",
      },
      parts: {
        title: "Запчасти и расходники",
        src: "holders_parts.jpg",
        alt: "Запчасти и расходники",
      },
    },
  }
```
---

[Строгачи](/src/api/catalog/chemistry/subcategories/planers.ts): 

*Структура оформления идентична разделу **Электродержатели***

---

[Байонетные разъемы](/src/api/catalog/chemistry/subcategories/bayonet_connectors.ts): 

В разделе data хранятся данные, необходимые для отображения таблиц/изображений и их описаний.

Страница состоит из двух больших разделов:

- techincal_info
- systems

**techical_info** содержит поля:

- title
- image, которое включает в себя *src* - имя картинки из соответствующей папки и *alt* с коротким скрытым описанием изображения
- table, поле с данными о таблице, которое состоит из поля *heading* с заголовком таблицы и из массива строк *rows* с данными самой таблицы


```
{
   label: "Название раздела",
    description:
      "Описание раздела, для переноса со строки на строку использовать \n",
    data: {
      technical_info: {
        title: "Технические данные",
        image: {
          src: "technical_info.jpeg",
          alt: "Таблица с техническими данными байонетных разъемов",
        },
        table: {
          heading: "*ABI–CM / ABI–IF или АBI–CF / ABI–IM",
          rows: [
            "ABI–CM (Cable Male) = кабельный штекер",
            "ABI–CF (Cable Female) = кабельное гнездо",
            "ABI–IM (Insert мale) = панельный штекер",
            "ABI–IF (Insert Female) = панельное гнездо",
          ],
        },
      },
      systems: {
        title: "Система байонетных разъемов",
        sections: [
          {
            image: {
              src: "table_1-8.jpg",
              alt: "Общий вид разъемов 1-8 из таблицы",
            },
            tables: [
              {
                heading: "Панельные гнезда",
                rows: [
                  { label: "1. ABI–IF 10–25", number: "Идент. No: 511.0304" },
                  { label: "2. ABI–IF 35-50", number: "Идент. No: 511.0314" },
                  { label: "3. ABI–IF 50–70", number: "Идент. No: 511.0330" },
                  { label: "4. ABI-IF 70-95", number: "Идент. No: 511.0309" },
                ],
              },
              {
                heading: "Кабельные штекера",
                rows: [
                  { label: "5. ABI–CM 10–25", number: "Идент. No: 511.0305" },
                  { label: "6. ABI–CM 35-50", number: "Идент. No: 511.0315" },
                  { label: "7. ABI–CM 50–70", number: "Идент. No: 511.0331" },
                  { label: "8. ABI-CM 70-95", number: "Идент. No: 511.0342" },
                ],
              },
            ],
          },
          {
            image: {
              src: "table_9-16.jpg",
              alt: "Общий вид разъемов 9-16 из таблицы",
            },
            tables: [
              {
                heading: "Панельные гнезда",
                rows: [
                  { label: "9. ABI–IM 10–25", number: "Идент. No: 511.0306" },
                  { label: "10. ABI–IM 35-50", number: "Идент. No: 511.0316" },
                  { label: "11. ABI–IM 50–70", number: "Идент. No: 511.0332" },
                  { label: "12. ABI-IM 70-95", number: "Идент. No: 511.0320" },
                ],
              },
              {
                heading: "Кабельные штекера",
                rows: [
                  { label: "13. ABI–CF 10–25", number: "Идент. No: 511.0303" },
                  { label: "14. ABI–CF 35-50", number: "Идент. No: 511.0313" },
                  { label: "15. ABI–CF 50–70", number: "Идент. No: 511.0329" },
                  { label: "16. ABI-CF 70-95", number: "Идент. No: 511.0340" },
                ],
              },
            ],
          },
        ],
      },
    },
  }
```
[Папка с изображениями для старницы байонетных разъемов](/frontend/public/bayonet_connectors)