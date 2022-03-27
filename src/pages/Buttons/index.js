import axios from 'axios';
import React from 'react';
import { Button } from '../../components';

const Buttons = () => {
  const removeAllFromShoppingBasket = (e) => {
    const target = e.target;

    target.innerText = 'Loading';

    let temp = setInterval(() => {
      if (target.innerText === 'Loading...') {
        target.innerText = 'Loading';
      } else {
        target.innerText += '.';
      }
    }, 250);

    const removeAll = async (target, interval) => {
      const result = await axios.patch(
        'http://localhost:4000/ingredients/removeAllFromBasket'
      );

      clearInterval(interval);

      result.status === 200
        ? (target.innerText = 'Done :)')
        : (target.innerText = 'Error :(');
    };

    removeAll(target, temp);

    // TODO - Refactor to look for the api response and update the client accordingly.
  };

  return (
    <>
      <h1>Buttons</h1>
      <Button
        onClick={removeAllFromShoppingBasket}
        text='Clear Items In Basket'
      />
      <Button
        onClick={removeAllFromShoppingBasket}
        text='Clear Weekly Recipes.'
      />
      <Button
        onClick={removeAllFromShoppingBasket}
        text='Clear All Ingredient Notes'
      />
    </>
  );
};

export default Buttons;
