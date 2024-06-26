import styles from "./page.module.css";
import Layout from "./layout/layout";
import Advantages from "./components/advantages/advantages";
import About from "./components/about/about";
import Branches from "./components/branches/branches";
import Production from "./components/production/production";
import FirstScreen from "./components/firstScreen/firstScreen";
import ContactForm from "./shared/contactForm/contactForm";
import Container from "./layout/container/container";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <FirstScreen />
        <Production />
        <About />
        <Advantages />
        <Branches />
        <Container>
          <ContactForm />
        </Container>
      </main>
    </Layout>
  );
}
