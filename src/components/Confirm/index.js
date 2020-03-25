import React from 'react';
import './style.css';

const Confirm = props => {
  const { content, cancelText, confirmText, onCancel, onConfirm } = props;
  return (
    <div className='confirm'>
      <div className='confirm__alert'>
        <div className='confirm__content'>{content}</div>
        <div className='confirm__btns'>
          <a className='confirm__btn' onClick={onCancel} href='javascript:;'>
            {cancelText}
          </a>
          <a className='confirm__btn' onClick={onConfirm} href='javascript:;'>
            {confirmText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
