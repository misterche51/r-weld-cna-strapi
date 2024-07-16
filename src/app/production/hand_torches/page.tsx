"use client";
import React, { useState } from "react";

import styles from "./hand_torches.module.css";

import ContactForm from "@/app/shared/contactForm/contactForm";
import Layout from "@/app/layout/layout";
import Container from "@/app/layout/container/container";
import Heading from "@/app/shared/heading/heading";
import DB from "@/api/db";
import CategorySelect from "./components/categorySelect/categorySelect";
import useBreadcrumbs from "@/utils/useBreadcrumbs";
import Breadcrumbs from "@/app/shared/breadcrumbs/breadcrumbs";

const HandTorchesMain = () => {
  const [visibleTextBlock, setVisibleTestBlock] = useState<
    "advantages" | "usage" | null
  >(null);

  const onAdvantagesButtonClickHandler = () => {
    setVisibleTestBlock("advantages");
  };

  const onUsageButtonClickHandler = () => {
    setVisibleTestBlock("usage");
  };

  const {label, description, data} = DB.catalog.torches;
  const PREPARED_DATA = Object.values(data.classes)

  const [advantagesLabel, usageLabel] = Object.keys(description)

  const breadcrumbs = useBreadcrumbs();
  return (
    <Layout>
      <Container>
        <div className={styles.wrapper}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <div className={styles.header}>
            <Heading rank={2} text={label} withUnderline={false} />
            <div className={styles.advantages}>
              <label className={styles.button}>
                <input
                  type="radio"
                  name="visible_text"
                  className={styles.button__input}
                  value="advantages"
                  checked={visibleTextBlock === "advantages"}
                  onChange={onAdvantagesButtonClickHandler}
                />
                <span className={styles.button__label}>Преимущества</span>
                <span
                  className={`${styles.button__description} ${styles["button__description--advantages"]}`}
                >
                  Срок службы выше аналогов за счёт производства
                  по международным стандартам и немецким технологиям. 
                  Эргономичный дизайн облегчает работу сварщика и уменьшает
                  усталость рук. Все ручные горелки R-Weld тщательно
                  тестируются, что сводит риск брака к минимуму. Износостойкость
                  и долговечность запасных частей обеспечивают экономию бюджета
                  предприятия и оптимизацию складских запасов.
                </span>
              </label>

              <label className={styles.button}>
                <input
                  type="radio"
                  name="visible_text"
                  className={styles.button__input}
                  value="usage"
                  checked={visibleTextBlock === "usage"}
                  onChange={onUsageButtonClickHandler}
                />
                <span className={styles.button__label}>Применение</span>
                <span
                  className={`${styles.button__description} ${styles["button__description--usage"]}`}
                >
                  Наши горелки используются во всех сферах промышленности:
                  от автомобилестроения и производства металлоконструкций,
                  до судостроения и инновационных технологий.
                </span>
              </label>
            </div>
          </div>
          <ul
            className={`${styles.list} ${
              visibleTextBlock ? styles[`list--${visibleTextBlock}`] : ""
            }`}
          >
            {PREPARED_DATA.map(({ label, image, categories }, i) => (
              <li key={i} className={styles.item}>
                <CategorySelect
                  label={label}
                  image={image}
                  categories={categories}
                />
              </li>
            ))}
          </ul>
          <ContactForm />
        </div>
      </Container>
    </Layout>
  );
};

export default HandTorchesMain;
