import React from "react";

import styles from "./robotization.module.css";

// import { GetStaticPaths, GetStaticProps } from "next";

import ContactForm from "@/app/shared/contactForm/contactForm";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Image from "next/image";
import Heading from "@/app/shared/heading/heading";

// import DB from "../../api/db";
import DB from "@/api/db";

const RobotizationMain = () => (
  // props: IBlogGalleryProps
  <Layout>
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          className={styles.image__img}
          src={"/robotization_big.jpg"}
          alt="элекментик"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <Container>
        <div className={styles.inner}>
          <Heading
            rank={2}
            text="Роботизация и автоматизация"
            withUnderline={true}
            variant="light"
          />

          <section className={styles.content}>
            <p className={styles.text}>
              Представители современных социальных резервов могут быть
              объективно рассмотрены соответствующими инстанциями. Сложно
              сказать, почему независимые государства призывают нас к новым
              свершениям, которые, в свою очередь, должны быть функционально
              разнесены на независимые элементы!
            </p>
            <p className={styles.text}>
              В своём стремлении улучшить пользовательский опыт мы упускаем,
              что акционеры крупнейших компаний и по сей день остаются уделом
              либералов, которые жаждут быть призваны к ответу.
            </p>
          </section>
          <div className={styles.form}>
            <ContactForm variant="light" />
          </div>
        </div>
      </Container>
    </div>
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

export default RobotizationMain;
