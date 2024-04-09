"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { PropsWithChildren, useState } from "react";
import Container from "../container/container";
import SearchBar from "@/app/shared/searchBar/searchBar";
import Menu from "./components/menu/menu";
import MenuButton from "./components/menu/components/menuButton/menuButton";
import Button from "@/app/shared/button/button";

const Logo = () => (
  <Link href={"/"}>
    <Image
      className={styles.logo_img}
      src="/logo.svg"
      alt="Логотип R-WELD"
      width={195}
      height={104}
      priority
    />
  </Link>
);

export default function Header({ children }: PropsWithChildren) {
  const [isOpened, setIsOpened] = useState(false);
  const [isDroppped, setIsDropped] = useState(false);
  const onMenuButtonClickHandler = () => {
    setIsOpened((val) => !val);
  };

  return (
    <header className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.navigation}>
            <div
              className={`${styles.menu} ${isOpened && styles["menu--opened"]}`}
            >
              <Menu />
            </div>
            <div className={styles.search}>
              <SearchBar placeholder="Найти..." />
            </div>
            <div className={styles.menu_btn}>
              <MenuButton
                isOpened={isOpened}
                onClickHandler={onMenuButtonClickHandler}
              />
            </div>
          </div>
          <div className={styles.intaractions_box}>
            <a className={styles.phone} href="tel:88009001010">
              8 800 900-10-10
            </a>
            <div className={styles.request_btn}>
              <Button text="Оставить заявку" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
