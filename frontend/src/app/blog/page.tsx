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
    title: "Новая точка",
    description: "Очень важная новость",
    image: "blog_0.jpg",
    date: "2 марта 1992",
  },
];
const PaginatePosts = () => (
  // props: IBlogGalleryProps
  <Layout>
    <Container>
      <h2 className={styles.title}>Новости компании</h2>
      {DATA.map((data) => (
        <PostMini {...data} />
      ))}
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
