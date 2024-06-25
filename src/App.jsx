import React from 'react';
import UserData from './components/UserData';

const App = () => {
  return (
    <>
      <div className='container'>
      <h1>Отримання даних рандомного користувача</h1>
      <UserData />
    </div>
    </>

  );
};

export default App;
