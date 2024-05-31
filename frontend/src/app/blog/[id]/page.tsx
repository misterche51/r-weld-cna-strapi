"use client";

import PostMini from "../components/postPreview/postPreview";
import { useRouter } from "next/router";
import Layout from "../../layout/layout";
import Container from "@/app/layout/container/container";
import DB from "@/api/db";
import ContactForm from "@/app/shared/contactForm/contactForm";
import GalleryPosts from "./components/gallery/gallery";
import Article from "./components/article/article";
import styles from "./page.module.css";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "@/app/shared/breadcrumbs/breadcrumbs";

type TPostPageProps = {
  params: {
    id: string;
  };
};

export default function PostPage(props: TPostPageProps) {
  const breadcrumbs = useBreadcrumbs();
  const { id } = props.params;
  const {
    previewTitle,
    articleTitle,
    image,
    date,
    shortDescription,
    fullDescription,
  } = DB.posts[+id];
  return (
    <Layout>
      <Container>
        <div className={styles.wrapper}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Article
            title={previewTitle}
            articleTitle={articleTitle}
            shortDescription={shortDescription}
            fullDescription={fullDescription}
            date={date}
            image={image}
          />
          <ContactForm />
          <GalleryPosts id={id} />
        </div>
      </Container>
    </Layout>
  );
}
