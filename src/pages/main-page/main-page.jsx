import { Header } from '@/components/header';

import { MainPromo } from './blocks/main-promo';

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainPromo />
      </main>
      <footer>Footer</footer>
    </>
  );
};
