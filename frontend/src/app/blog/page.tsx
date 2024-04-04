import React from "react";
import Layout from "../layout/layout";
import styles from "./blog.module.css";

// import { GetStaticPaths, GetStaticProps } from "next";
import ContactForm from "../shared/contactForm/contactForm";
import Container from "../layout/container/container";
import PostPreview from "./components/postPreview/postPreview";
import Heading from "../shared/heading/heading";
import Link from "next/link";
import DB from "../../api/db";

type IPageUrl = {
  page: string;
};

const PaginatePosts = () => (
  // props: IBlogGalleryProps
  <Layout>
    <Container>
      <div className={styles.wrapper}>
        <Heading rank={2} text="Новости компании" withUnderline={false} />
        <ul className={styles.list}>
          {DB.posts.map(
            ({ id, previewTitle, shortDescription, image, date }) => (
              <li key={id} className={styles.item}>
                <Link href={`/blog/${id}`}>
                  <PostPreview
                    title={previewTitle}
                    description={shortDescription}
                    date={date}
                    image={image}
                  />
                </Link>
              </li>
            )
          )}
        </ul>
        <ContactForm />
      </div>
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
