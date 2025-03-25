import { useEffect, useState } from 'react';

import { getTeachersList } from '@/api/mock-api';
import type { TeacherListType } from '@/types/teacher';

import { MainPageContext } from './providers/main-page-context';
import { MainPageView } from './main-page-view';

export const MainPage = () => {
  const [teachersList, setTeachersList] = useState<TeacherListType[] | []>([]);

  useEffect(() => {
    getTeachersList()
      .then((data) => setTeachersList(data))
      .catch(console.error);
  }, []);

  return (
    <MainPageContext.Provider value={{ teachersList }}>
      <MainPageView />
    </MainPageContext.Provider>
  );
};
