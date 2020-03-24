import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default () => {
  return (
    <div className='loginHeader'>
      <Link to='/' className='loginHeader__back'></Link>
      <div className='loginHeader__title'>账号秘密登录</div>
    </div>
  );
};
