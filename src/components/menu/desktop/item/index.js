import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Desktop = ({ link, title }) => (
  <li>
    <Link to={`${link}/`} activeClassName="active">
      {title}
    </Link>
  </li>
);

Desktop.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Desktop;
