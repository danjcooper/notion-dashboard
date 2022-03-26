import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getApiUrl } from '../../helpers';
import { ListItem } from '../../components';

const List = () => {
  const [data, setData] = useState(null);
  const [apiUrl, setApiUrl] = useState(getApiUrl());

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${apiUrl}/ingredients/all`);
      console.log(data.data.data);
      setData(data.data.data);
    };
    getData();
  }, [apiUrl]);

  return (
    <>
      <h1>List</h1>
      {data
        ? data.map((i) => {
            if (i.inShoppingList || i.manuallyAdded) {
              return <ListItem key={i.id} item={i} />;
            }
          })
        : null}
    </>
  );
};

export default List;
