import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { getApiUrl } from '../../helpers';

const ListItem = ({ item }) => {
  const [active, setActive] = useState(item.properties['Picked Up'].checkbox);
  const [opacity, setOpacity] = useState(active ? '0.4' : '1');
  const [pageId, setPageId] = useState(item.id);
  const initRender = useRef(true);

  useEffect(() => {
    const updatePickedUp = async () => {
      if (initRender.current) {
        //Don't run if button hasn't been clicked.
        return;
      }
      const body = { page_id: pageId, checked: active };
      const response = await axios.patch(`${getApiUrl()}/meals/update`, body);
      console.log(response);
    };
    updatePickedUp();
  }, [active]);

  const defaultStyles = {
    background: 'rgb(168, 212, 168)',
    width: '80%',
    margin: '5px',
    padding: '3px',
    borderRadius: '5px',
    display: 'inline-block',
    opacity: opacity,
  };

  const handleClick = () => {
    initRender.current = false;
    setActive(!active);
    setOpacity((prevState) => (prevState === '1' ? '0.4' : '1'));
  };

  console.log(item.properties['Add to Shopping List'].rollup.array[0]);

  return (
    <article style={defaultStyles} onClick={handleClick}>
      <h2>{item.properties.Name.title[0].plain_text}</h2>
      <p>{item.properties.Department.multi_select[0].name}</p>
      {item.properties.Notes.rich_text.length > 0 ? (
        <p>{item.properties.Notes.rich_text[0].plain_text}</p>
      ) : null}
    </article>
  );
};

export default ListItem;
