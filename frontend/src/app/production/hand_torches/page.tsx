"use client";
import React, { useState } from "react";

import styles from "./hand_torches.module.css";

// import { GetStaticPaths, GetStaticProps } from "next";
import { TTorchesCatalog } from "@/api/db";
import ContactForm from "@/app/shared/contactForm/contactForm";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import DB from "@/api/db";
import CategorySelect from "./components/categorySelect/categorySelect";

const HandTorchesMain = () => {
  const [visibleTextBlock, setVisibleTestBlock] = useState<
    "advantages" | "usage" | null
  >(null);

  const onAdvantagesButtonClickHandler = () => {
    setVisibleTestBlock("advantages");
  };

  const onUsageButtonClickHandler = () => {
    setVisibleTestBlock("usage");
  };

  const PREPARED_DATA = Object.values(DB.catalog.torches as TTorchesCatalog);

  return (
    <Layout>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Heading rank={2} text="Ручные горелки" withUnderline={false} />
            <div className={styles.advantages}>
              <label className={styles.button}>
                <input
                  type="radio"
                  name="visible_text"
                  className={styles.button__input}
                  value="advantages"
                  checked={visibleTextBlock === "advantages"}
                  onChange={onAdvantagesButtonClickHandler}
                />
                <span className={styles.button__label}>Преимущества</span>
                <span
                  className={`${styles.button__description} ${styles["button__description--advantages"]}`}
                >
                  Срок службы выше аналогов за счёт производства
                  по международным стандартам и немецким технологиям. 
                  Эргономичный дизайн облегчает работу сварщика и уменьшает
                  усталость рук. Все ручные горелки R-Weld тщательно
                  тестируются, что сводит риск брака к минимуму. Износостойкость
                  и долговечность запасных частей обеспечивают экономию бюджета
                  предприятия и оптимизацию складских запасов.
                </span>
              </label>

              <label className={styles.button}>
                <input
                  type="radio"
                  name="visible_text"
                  className={styles.button__input}
                  value="usage"
                  checked={visibleTextBlock === "usage"}
                  onChange={onUsageButtonClickHandler}
                />
                <span className={styles.button__label}>Применение</span>
                <span
                  className={`${styles.button__description} ${styles["button__description--usage"]}`}
                >
                  Наши горелки используются во всех сферах промышленности:
                  от автомобилестроения и производства металлоконструкций,
                  до судостроения и инновационных технологий.
                </span>
              </label>
            </div>
          </div>
          <ul
            className={`${styles.list} ${
              visibleTextBlock ? styles[`list--${visibleTextBlock}`] : ""
            }`}
          >
            {PREPARED_DATA.map(({ label, image, categories }, i) => (
              <li key={i} className={styles.item}>
                <CategorySelect
                  label={label}
                  image={image}
                  categories={categories}
                />
              </li>
            ))}
          </ul>
          <ContactForm />
        </div>
      </Container>
    </Layout>
  );
};
// <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
//   <BlogGallery posts={props.posts} pagination={props.pagination} />
// </Main>

// export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
//   const posts = getAllPosts(["slug"]);

//   const pages = convertTo2D(posts, AppConfig.pagination_size);

//   return {
//     paths: pages.slice(1).map((_, index) => ({
//       params: {
//         // Index starts from zero so we need to do index + 1
//         // slice(1) removes the first page so we do another index + 1
//         // the first page is implemented in index.tsx
//         page: `page${index + 2}`,
//       },
//     })),
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<
//   IBlogGalleryProps,
//   IPageUrl
// > = async ({ params }) => {
//   const posts = getAllPosts(["title", "date", "slug"]);

//   const pages = convertTo2D(posts, AppConfig.pagination_size);
//   const currentPage = Number(params!.page.replace("page", ""));
//   const currentIndex = currentPage - 1;

//   const pagination: IPaginationProps = {};

//   if (currentPage < pages.length) {
//     pagination.next = `page${currentPage + 1}`;
//   }

//   if (currentPage === 2) {
//     pagination.previous = "/";
//   } else {
//     pagination.previous = `page${currentPage - 1}`;
//   }

//   return {
//     props: {
//       posts: pages[currentIndex],
//       pagination,
//     },
//   };
// };

export default HandTorchesMain;
