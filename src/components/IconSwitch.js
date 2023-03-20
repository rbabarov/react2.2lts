import React from 'react';
import propTypes from 'prop-types';
import list from '../img/view_list.svg';
import module from '../img/view_module.svg';

function IconSwitch(props) {
  const { icon, onSwitch } = props;
  const link = icon === 'list' ? list : module;
  return (
    <button className='btn_control' onClick={(item) => onSwitch(item)}>
      <img className='btn_img' src={link} alt={icon}/>
    </button>
  )
}

IconSwitch.propTypes = {
  icon: propTypes.oneOf(['list', 'module']).isRequired,
  onSwitch: propTypes.func.isRequired
}

export default IconSwitch;
