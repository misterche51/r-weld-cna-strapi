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
import DB from "@/api/db";
import { useRouter } from 'next/navigation';

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
  const {phone} = DB.info;
  const [isOpened, setIsOpened] = useState(false);
  const [isDroppped, setIsDropped] = useState(false);
  const onMenuButtonClickHandler = () => {
    setIsOpened((val) => !val);
  };
  const router = useRouter()
  const onSubmitHandler = (value: string) => value.trim().length !== 0 ? router.push(`/search?${value}`): null;

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
              <SearchBar placeholder="Найти..."  onSearchStart={onSubmitHandler}/>
            </div>
            <div className={styles.menu_btn}>
              <MenuButton
                isOpened={isOpened}
                onClickHandler={onMenuButtonClickHandler}
              />
            </div>
          </div>
          <div className={styles.intaractions_box}>
            <a className={styles.phone} href={phone.href}>
              {phone.label}
            </a>
            <div className={styles.request_btn}>
              {/* ts-expect-error */}
              <Button text="Оставить заявку" role='link'/>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
