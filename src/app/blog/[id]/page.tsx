

import styles from "./page.module.css";
import Container from "@/app/layout/container/container";
import DB from "@/api/db";
import ContactForm from "@/app/shared/contactForm/contactForm";
import GalleryPosts from "./components/gallery/gallery";
import Article from "./components/article/article";
import { PageWrapper } from "@/app/layout/pageWrapper";
import PageNotFound from "@/app/not-found";
import { TPostItem } from "@/api/blog/declarations";

type TPostPageProps = {
  params: {
    id: string;
  };
};

// Компонент страницы поста
export default async function PostPage({ params }: TPostPageProps) {
  const postId = Number(params.id);
  const post = DB.posts[postId] || null;

  // Если пост не существует, возвращаем страницу 404
  if (!post) return <PageNotFound />;
  
  const {
    previewTitle,
    articleTitle,
    image,
    date,
    shortDescription,
    fullDescription,
    id
  } = post;

  return (
    <PageWrapper 
      content={ 
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
          <GalleryPosts id={id.toString()} />
        </div>
      </Container>
      }
      withContactForm={false}
    />
  );
}

export async function  generateStaticParams(){
  const paths = DB.posts.map(post => ({
    id: post.id.toString(),
  }));

  return paths;
};
