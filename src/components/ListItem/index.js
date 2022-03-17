import React, { useState } from 'react';

const ListItem = ({ item }) => {
  const [active, setActive] = useState(true);
  const [opacity, setOpacity] = useState(
    item.properties['Picked Up'].checkbox ? '0.4' : '1'
  );

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
    setActive(!active);
    setOpacity((prevState) => (prevState === '1' ? '0.4' : '1'));
  };

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
