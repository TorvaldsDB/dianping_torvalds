import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default props => {
  const { text } = props;
  return (
    <div className='keywordBox'>
      <Link to='/search' className='keywordBox__text'>
        {text}
      </Link>
    </div>
  );
};
