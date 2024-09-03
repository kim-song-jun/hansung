import { useState } from 'react';
import { MainBanner } from './components/MainBanner';
import { SurveyForm } from './components/SurveyForm';

export const App = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      {(page === 0 && <MainBanner setPage={setPage} />) ||
        (page === 1 && <SurveyForm></SurveyForm>)}
    </>
  );
};
