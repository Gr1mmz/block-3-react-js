import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

import { MainAbout } from './blocks/main-about';
import { MainBenefits } from './blocks/main-benefits';
import { MainPackages } from './blocks/main-packages';
import { MainPromo } from './blocks/main-promo';
import { MainTeachers } from './blocks/main-teachers';

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainPromo />
        <MainAbout />
        <MainBenefits />
        <MainTeachers />
        <MainPackages />
      </main>
      <Footer />
    </>
  );
};
