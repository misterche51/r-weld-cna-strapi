// import { getStaticProps } from "next/dist/build/templates/pages";
import PostMini from "../components/postPreview/postPreview";
import { useRouter } from "next/router";
import Layout from "../../layout/layout";
import Container from "@/app/layout/container/container";
import DB from "@/api/db";
import ContactForm from "@/app/components/contactForm/contactForm";
import GalleryPosts from "./components/gallery/gallery";
import Article from "./components/article/article";
import styles from "./page.module.css";

type TPostPageProps = {
  params: {
    id: string;
  };
};

export default function PostPage(props: TPostPageProps) {
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
