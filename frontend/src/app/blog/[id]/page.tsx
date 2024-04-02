// import { getStaticProps } from "next/dist/build/templates/pages";
import PostMini from "../components/postMini/postMini";
import { useRouter } from "next/router";
import Layout from "../../layout/layout";
import Container from "@/app/layout/container/container";
import DB from "@/api/db";
import ContactForm from "@/app/components/contactForm/contactForm";
import GalleryPosts from "./components/gallery/gallery";
import styles from "./page.module.css";

// // @ts-expect-error
export default function Post(props) {
  const { id } = props.params;
  const { title, image, date, description } = DB.posts[id]!;
  return (
    <Layout>
      <Container>
        <div className={styles.wrapper}>
          <PostMini
            title={title}
            description={description}
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
