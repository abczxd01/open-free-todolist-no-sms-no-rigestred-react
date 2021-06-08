import React, { useState } from 'react';

import { Header } from '../Header/Header';
import { CreationMenu } from '../Task/CreationMenu';

import addIcon from './add.svg';

export const Main = () => {
  const [isCreate, setisCreate] = useState(false);

  return (
    <>
      <Header />
      <button onClick={() => { setisCreate(true); }} type="button">
        <img src={addIcon} alt="add" />
      </button>
      {isCreate && <CreationMenu />}
    </>
  );
};
