import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getApiUrl, hasItemsInShoppingList } from '../../helpers';
import { ListDepartment, MiscListItem } from '../../components';

const Misc = () => {
  const [data, setData] = useState(null);
  const [apiUrl, setApiUrl] = useState(getApiUrl());

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `${apiUrl}/mealprep/ingredients/notInRecipe`
      );
      console.log(data.data);
      setData(data.data);
    };
    getData();
  }, [apiUrl]);

  return (
    <>
      <h1>List</h1>
      {data
        ? data.map((ingredient) => (
            <MiscListItem key={ingredient.id} item={ingredient} />
          ))
        : null}
    </>
  );
};

export default Misc;
