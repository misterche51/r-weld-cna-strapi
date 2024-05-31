import React from "react";
import styles from "./gallery.module.css";
import PostPreiview from "@/app/blog/components/postPreview/postPreview";
import Link from "next/link";
import DB from "@/api/db";

type IPageUrl = {
  page: string;
};

type TGalleryPostsProps = {
  id: string;
};

export default function GalleryPosts({ id }: TGalleryPostsProps) {
  const filteredPosts = DB.posts
    .filter((post) => post!.id !== Number(id))
    .slice(0, 2);
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Другие новости</h2>
      <ul className={styles.list}>
        {filteredPosts.map(
          ({ id, previewTitle, shortDescription, image, date }) => (
            <li key={id} className={styles.item}>
              <Link href={`/blog/${id}`}>
                <PostPreiview
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
    </section>
  );
}
