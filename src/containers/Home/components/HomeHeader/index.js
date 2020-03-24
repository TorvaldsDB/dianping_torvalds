import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default () => {
  return (
    <div className='homeHeader'>
      <header className='homeHeader__wrapper'>
        <a className='homeHeader__city' href='/'>
          北京
        </a>
        <Link to='/search' className='homeHeader__search'>
          输入商品名, 地点
        </Link>
        <Link to='/user' className='homeHeader__self'>
          <div className='homeHeader__portrait' />
        </Link>
      </header>
    </div>
  );
};
