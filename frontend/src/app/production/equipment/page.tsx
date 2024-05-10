import React from "react";

import styles from "./equipment.module.css";

// import { GetStaticPaths, GetStaticProps } from "next";

import ContactForm from "@/app/shared/contactForm/contactForm";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import CatalogItem from "@/app/shared/catalogItem/catalogItem";
import Link from "next/link";
// import DB from "../../api/db";
import DB from "@/api/db";

const EquipmentMain = () => (
  <Layout>
    <Container>
      <div className={styles.wrapper}>
        <Heading rank={2} text="Оборудование и прочее" withUnderline={true} />
        <ul className={styles.list}>
          {DB.catalog.equipment.map(({ label, image }, i) => (
            <li key={i} className={styles.item}>
              <Link href={`/`}>
                <CatalogItem label={label} image={image} />
              </Link>
            </li>
          ))}
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

export default EquipmentMain;
