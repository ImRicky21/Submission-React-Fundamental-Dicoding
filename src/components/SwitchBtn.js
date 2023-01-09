import React from 'react';
import PropTypes from 'prop-types';
import { BsFillMoonFill } from 'react-icons/bs';

export default function SwitchButton({ onToggle }) {    
  return (
    <>
    <div className="switch-btn" onClick={onToggle}>
    <BsFillMoonFill className='icon'/>
    </div>
    </>
  );
}

SwitchButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
