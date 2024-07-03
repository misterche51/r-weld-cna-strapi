"use client";

import React from "react";
import Layout from "../layout/layout";
import styles from "./blog.module.css";

import ContactForm from "../shared/contactForm/contactForm";
import Container from "../layout/container/container";
import PostPreview from "./components/postPreview/postPreview";
import Heading from "../shared/heading/heading";
import Link from "next/link";
import DB from "../../api/db";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "../shared/breadcrumbs/breadcrumbs";

const PaginatePosts = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Layout>
      <Container>
        <div className={styles.wrapper}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
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
  );
};

export default PaginatePosts;
