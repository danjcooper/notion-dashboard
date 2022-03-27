import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { getApiUrl, getDepartmentClassName } from '../../helpers';

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
    <article
      className={`listItem ${getDepartmentClassName(item.department)}`}
      style={defaultStyles}
      onClick={handleClick}
    >
      <section className='main-product-details'>
        <h2>{item.name}</h2>
        <h3>
          <span className='light'>QTY: </span>
          {item.quantity}
        </h3>
      </section>
    </article>
  );
};

export default ListItem;
