import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { getApiUrl, getDepartmentClassName } from '../../helpers';

const MiscListItem = ({ item }) => {
  const [active, setActive] = useState(item.manuallyAdded);
  const [opacity, setOpacity] = useState(active ? '1' : '0.4');
  const [pageId, setPageId] = useState(item.id);
  const initRender = useRef(true);

  useEffect(() => {
    const updatePickedUp = async () => {
      if (initRender.current) return;

      const body = { page_id: pageId, checked: active };

      const response = await axios.patch(
        `${getApiUrl()}/mealprep/ingredients/update/manuallyAdded`,
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
      </section>
    </article>
  );
};

export default MiscListItem;
