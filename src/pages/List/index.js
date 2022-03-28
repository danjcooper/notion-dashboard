import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getApiUrl, hasItemsInShoppingList } from '../../helpers';
import { ListDepartment } from '../../components';

const List = () => {
  const [data, setData] = useState(null);
  const [apiUrl, setApiUrl] = useState(getApiUrl());

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `${apiUrl}/mealPrep/ingredients/all/byDepartment`
      );
      console.log(data.data.data);
      setData(data.data.data);
    };
    getData();
  }, [apiUrl]);

  return (
    <>
      <h1>List</h1>
      {data
        ? data.map((department, index) =>
            hasItemsInShoppingList(department.ingredients) ? (
              <ListDepartment key={index} department={department} />
            ) : null
          )
        : null}
    </>
  );
};

export default List;
