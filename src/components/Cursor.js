import React from 'react';
import PropTypes from 'prop-types';

const styles = './Cursor.module.scss';

const Cursor = ({ className }) => (
  <span className={className}>|</span>
);

Cursor.propTypes = { className: PropTypes.string };
Cursor.defaultProps = { className: styles.cursor};

export default Cursor;
