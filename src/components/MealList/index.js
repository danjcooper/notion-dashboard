import React from 'react';
import MealListItem from '../MealListItem';

const MealList = ({ data }) => {
  return (
    <>
      <h2>List goes here</h2>
      {data.map((item, index) => (
        <MealListItem key={index} data={item} />
      ))}
    </>
  );
};

export default MealList;
