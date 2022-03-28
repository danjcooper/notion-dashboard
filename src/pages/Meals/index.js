import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MealList } from '../../components';
import { getApiUrl, hasItemsInShoppingList } from '../../helpers';

const Meals = () => {
  const [mealData, setMealData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${getApiUrl()}/mealprep/meals/all`);
      console.log(data.data);
      setMealData(data.data);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Meals</h1>
      {mealData ? <MealList data={mealData} /> : null}
    </>
  );
};

export default Meals;
