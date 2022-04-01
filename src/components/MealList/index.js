import React from 'react';
import MealListItem from '../MealListItem';

const MealList = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <MealListItem key={index} data={item} />
      ))}
    </>
  );
};

export default MealList;
