import React from 'react';

const MealList = ({ data }) => {
  return (
    <>
      <h2>List goes here</h2>
      {data.map((item) => (
        <article className='listItem'>
          <h2>{item.emoji}</h2>
          <h2>{item.name}</h2>
        </article>
      ))}
    </>
  );
};

export default MealList;
