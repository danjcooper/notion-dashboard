import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getApiUrl } from '../../helpers';
import { ListItem } from '../../components';

const List = () => {
  const [data, setData] = useState(null);
  const [apiUrl, setApiUrl] = useState(getApiUrl());

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${apiUrl}/meals/all`);
      // console.log(data.data.data.results);
      setData(data.data.data.results);
    };
    getData();
  }, [apiUrl]);

  return (
    <>
      <h1>List</h1>
      {data
        ? data.map((i) => {
            if (
              i.properties.QTY.rollup.number > 0 ||
              i.properties['Manually Add'].checkbox
            ) {
              return <ListItem key={i.id} item={i} />;
            }
          })
        : null}
    </>
  );
};

export default List;
