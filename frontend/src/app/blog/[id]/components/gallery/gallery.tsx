import React from "react";
import styles from "./gallery.module.css";
import PostMini from "@/app/blog/components/postMini/postMini";
import Link from "next/link";
import DB from "@/api/db";

type IPageUrl = {
  page: string;
};

export default function GalleryPosts({ id }) {
  const filteredPosts = DB.posts.filter((post) => post!.id !== id).slice(0, 2);
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Другие новости</h2>
      <ul className={styles.list}>
        {filteredPosts.map((data) => (
          <li key={data!.id} className={styles.item}>
            <Link href={`/blog/${data!.id}`}>
              <PostMini {...data!} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
