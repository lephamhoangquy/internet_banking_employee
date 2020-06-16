import React from 'react';
import Search from './formSearch';

const Charge = () => {
  const onSearch = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Search onSubmit={onSearch} />
    </div>
  );
};

export default Charge;
