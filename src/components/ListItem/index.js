import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { getApiUrl } from '../../helpers';

const ListItem = ({ item }) => {
  const [active, setActive] = useState(item.inShoppingBasket);
  const [opacity, setOpacity] = useState(active ? '0.4' : '1');
  const [pageId, setPageId] = useState(item.id);
  const initRender = useRef(true);

  useEffect(() => {
    const updatePickedUp = async () => {
      if (initRender.current) return;

      const body = { page_id: pageId, checked: active };
      const response = await axios.patch(
        `${getApiUrl()}/ingredients/update`,
        body
      );
      console.log(response);
    };
    updatePickedUp();
  }, [active]);

  const defaultStyles = {
    opacity: opacity,
  };

  const handleClick = () => {
    initRender.current = false;

    setActive(!active);
    setOpacity((prevState) => (prevState === '1' ? '0.4' : '1'));
  };

  return (
    <article className='listItem' style={defaultStyles} onClick={handleClick}>
      <h2>{item.name}</h2>

      <section className='department'>
        <p>{item.department}</p>
      </section>

      {item.notes ? <p>{item.notes}</p> : null}
    </article>
  );
};

export default ListItem;
