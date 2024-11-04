import Header from "./header/header";
import Footer from "./footer/footer";
import Link from "next/link";
import styles from './layout.module.css'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Link href="#header" className={styles.scroll_btn} ></Link>
      <Footer />
    </>
  );
}
