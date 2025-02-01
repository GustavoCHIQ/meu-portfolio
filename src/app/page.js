import Head from 'next/head';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Dev. Gustavo Chiquitin</title>
      </Head>
      <Header />
      <Projects />
      <Footer />
    </>
  );
}