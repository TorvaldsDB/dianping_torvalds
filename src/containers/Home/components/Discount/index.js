import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default props => {
  const { data } = props;
  return (
    <div className='discount'>
      <a className='discount__header' href='javascript:;'>
        <span className='discount__title'>超值特惠</span>
        <span className='discount__more'>更多优惠</span>
        <span className='discount__arrow' />
      </a>
      <div className='discount__content'>
        {data.map((item, index) => {
          return (
            <Link
              key={item.id}
              to={`/detail/${item.id}`}
              className='discount__item'
            >
              <div className='discount__itemPic'>
                <img width='100%' height='100%' src={item.picture} alt='' />
              </div>
              <div className='discount__itemTitle'>{item.shop}</div>
              <div className='discount__itemPriceWrapper'>
                <ins className='discount__itemCurrentPrice'>
                  {item.currentPrice}
                </ins>
                <del className='discount__itemOldPrice'>{item.oldPrice}</del>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
