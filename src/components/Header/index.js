import React, { Component } from 'react';
import './style.css';

export default props => {
  const { grey, title, onBack } = props;
  const backgroundColor = grey ? '#f0f0f0' : '#fff';
  return (
    <header className='header' style={{ backgroundColor: backgroundColor }}>
      <div className='header__back' onClick={onBack}>
        返回
      </div>
      <div className='header__title'>{title}</div>
    </header>
  );
};
