import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ListItem } from '../../components';

const List = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        'https://portfolio-api-dc.herokuapp.com/meals/all'
      );
      console.log(data.data.data.results);
      setData(data.data.data.results);
    };
    getData();
  }, []);

  return (
    <>
      <h1>List</h1>
      {data ? data.map((i) => <ListItem key={i.id} item={i} />) : null}
    </>
  );
};

export default List;
