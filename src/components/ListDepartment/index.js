import React from 'react';
import { ListItem } from '../';

const ListDepartment = ({ department }) => {
  return (
    <section>
      <h2 className='department-title'>{department.name}</h2>

      {department.ingredients.map((ingredient) =>
        ingredient.inShoppingList || ingredient.manuallyAdded ? (
          <ListItem key={ingredient.id} item={ingredient} />
        ) : null
      )}
    </section>
  );
};

export default ListDepartment;
