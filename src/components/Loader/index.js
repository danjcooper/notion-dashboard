import React from 'react';
import gif from './loader.gif';

const Loader = () => {
  return (
    <div className='sample-div'>
      <img alt='loading spinner' src={gif} />
    </div>
  );
};

export default Loader;
