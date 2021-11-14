import React from 'react';
import { getDerivedColor } from '../utils/colors';

const Category = ({ children, color }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        color: getDerivedColor(color, child.props.id),
      });
    }
    return child;
  });
  return <g transform='translate(200, 200)'>{childrenWithProps}</g>;
};

export default Category;
