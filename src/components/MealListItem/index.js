import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { getApiUrl } from '../../helpers';

const MealListItem = ({ data }) => {
  const [isInMealPlan, setIsInMealPlan] = useState(data.isInMealPlan);
  const [pageId, setPageId] = useState(data.id);
  const [opacity, setOpacity] = useState(isInMealPlan ? '1' : '0.4');
  const initRender = useRef(true);

  useEffect(() => {
    if (initRender.current) return;

    const updatePickedUp = async () => {
      if (initRender.current) return;

      const response = await axios.patch(
        `${getApiUrl()}/mealprep/meals/update`,
        { page_id: pageId, checked: isInMealPlan }
      );
      console.log(response);
    };

    updatePickedUp();
  }, [isInMealPlan]);

  const handleClick = () => {
    initRender.current = false;
    setIsInMealPlan((prevState) => !prevState);
    setOpacity((prevState) => (prevState === '1' ? '0.4' : '1'));
  };

  const defaultStyles = {
    opacity: opacity,
  };

  return (
    <>
      <article style={defaultStyles} className='listItem' onClick={handleClick}>
        <h1>{data.emoji}</h1>
        <h2>{data.name}</h2>
      </article>
    </>
  );
};

export default MealListItem;
