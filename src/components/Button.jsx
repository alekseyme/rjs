import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ click, className, outline, children }) => {
	return (
		<button
			onClick={click}
			className={classNames('button', className, { 'button--outline': outline })}>
			{children}
		</button>
	);
};

Button.propTypes = {
	click: PropTypes.func,
};

export default Button;
