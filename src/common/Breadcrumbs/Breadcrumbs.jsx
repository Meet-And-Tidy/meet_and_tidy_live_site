import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';

// Contains a list of "breadcrumb" navigation links.
const Breadcrumbs = ({ children }) => {
  const links = React.Children.toArray(children);

  const elements = links.map((el, i) => (
    <label key={i} className="elements" title={el.props.children}>
      {el} {links.length !== i + 1 && '>'}
    </label>
  ));

  return (
    <div data-testid={'bc-container'} className="breadcrumbs">
      <label data-testid={'bc-home-label'}>
        <Link to={'/'}>Home</Link>
        {links.length > 0 && ' >'}
      </label>
      {elements}
    </div>
  );
};

Breadcrumbs.propTypes = {
  children: PropTypes.node,
};

export default Breadcrumbs;
