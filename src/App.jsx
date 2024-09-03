import { useState } from 'react';
import { MainBanner } from './components/MainBanner';
import { SurveyForm } from './components/SurveyForm';

export const App = () => {
  const [page, setPage] = useState(0);
  const [userEmail, setUserEmail] = useState('');

  return (
    <>
      {(page === 0 && (
        <MainBanner setPage={setPage} setUserEmail={setUserEmail} />
      )) ||
        (page === 1 && <SurveyForm userEmail={userEmail}></SurveyForm>)}
    </>
  );
};
