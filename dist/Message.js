import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Message = props => {
  const classes = props.className.split(' ');
  classes.push('message');
  if (props.level) {
    classes.push(`message-level-${props.level}`);
  }
  return React.createElement(
    'div',
    { className: classes.join(' ') },
    React.createElement(
      'button',
      { className: 'dismiss', onClick: props.onDismiss },
      'x'
    ),
    props.children
  );
};

Message.propTypes = PropTypes.func.isRequired, module.exports = exports = Message;

