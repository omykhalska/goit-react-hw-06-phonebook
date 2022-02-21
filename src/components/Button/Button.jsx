import React from 'react';
import PropTypes from 'prop-types';
import { CommonBtn } from './Button.styled';

function Button({
  label,
  onClick = () => null,
  type = 'button',
  disabled = false,
}) {
  return (
    <CommonBtn type={type} onClick={onClick} disabled={disabled}>
      {label}
    </CommonBtn>
  );
}
Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
