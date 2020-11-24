import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import MainSection from '../components/MainSection';
import FooterSection from '../components/FooterSection';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>GoodFood GoodMood</title>
      </Head>
      <HeroSection />
      <MainSection />
      <FooterSection />
    </div>
  );
}
