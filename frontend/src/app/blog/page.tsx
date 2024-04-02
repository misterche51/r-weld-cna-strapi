import React from "react";
import Layout from "../layout/layout";
import styles from "./blog.module.css";

import { GetStaticPaths, GetStaticProps } from "next";
import ContactForm from "../components/contactForm/contactForm";
import Container from "../layout/container/container";
import PostMini from "./components/postMini/postMini";

type IPageUrl = {
  page: string;
};
const DATA = [
  {
    title: "Открытие нового филиала",
    description:
      "Противоположная точка зрения подразумевает, что базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть в равной степени предоставлены сами себе. Задача организации, в особенности же экономическая повестка сегодняшнего дня прекрасно подходит для реализации новых принципов формирования материально-технической и кадровой базы.",
    image: "blog_0.jpg",
    date: "2 марта 1992",
  },
  {
    title: "Новинка",
    description:
      "Имеется спорная точка зрения, гласящая примерно следующее: стремящиеся вытеснить традиционное производство, нанотехнологии лишь добавляют фракционных разногласий и описаны максимально подробно.",
    image: "blog_0.jpg",
    date: "5 марта 1992",
  },
  {
    title: "Доставка",
    description:
      "Есть над чем задуматься: представители современных социальных резервов могут быть заблокированы в рамках своих собственных рациональных ограничений.",
    image: "blog_0.jpg",
    date: "5 марта 1992",
  },
];
const PaginatePosts = () => (
  // props: IBlogGalleryProps
  <Layout>
    <Container>
      <h2 className={styles.title}>Новости компании</h2>
      <ul className={styles.list}>
        {DATA.map((data, i) => (
          <li key={i} className={styles.item}>
            <PostMini {...data} />
          </li>
        ))}
      </ul>

      <ContactForm />
    </Container>
  </Layout>

  // <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
  //   <BlogGallery posts={props.posts} pagination={props.pagination} />
  // </Main>
);

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

export default PaginatePosts;
