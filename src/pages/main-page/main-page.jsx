import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { MainAbout } from './blocks/main-about';
import { MainPromo } from './blocks/main-promo';

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainPromo />
        <MainAbout />
      </main>
      <Footer />
    </>
  );
};
