import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? html : undefined}>
      {!html && value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  })
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;
