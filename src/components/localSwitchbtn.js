import React from 'react';
import PropTypes from 'prop-types';
import { BsTranslate } from 'react-icons/bs';

export default function LocalSwitchBtn({ onToggle }) {    
  return (
    <>
    <div className="switch-btn" onClick={onToggle}>
    <BsTranslate className='icon'/>
    </div>
    </>
  );
}

LocalSwitchBtn.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
