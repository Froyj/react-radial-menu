import React, { useState } from 'react';

const getTotalMenuItems = (children) => {
  const totalGrandChildren = children.reduce(
    (carry, current) => (carry += current.props.children.length),
    0
  );
  return totalGrandChildren;
};

const RadialMenu = ({ children, largeRadius, smallRadius }) => {
  const totalItems = getTotalMenuItems(children);
  const sliceAngle = (2 * Math.PI) / totalItems;
  
  
  
  const slices = Array.from({ length: totalItems }, (_, i) => ({
    id: i,
    startAngle: sliceAngle * i,
    angle: sliceAngle,
    smallRadius,
    largeRadius,
  }));

  const [shouldDisplay, setShouldDisplay] = useState(true);
  const toggleDisplay = (event) => {
    event.preventDefault();
    setShouldDisplay(!shouldDisplay);
    return false;
  };

  let angleToStartCategoryFrom = 0
  const childrenWithProps = React.Children.map(children, (child, i) => {
    const totalAngle = 2 * Math.PI* (child.props.children.length/totalItems);
    const startAngle = angleToStartCategoryFrom;
    angleToStartCategoryFrom += totalAngle;
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        smallRadius,
        largeRadius,
        totalAngle,
        startAngle,
      });
    }
    return child;
  });

  return (
    <>
      <div onContextMenu={toggleDisplay}>
        <svg
          width='400'
          height='400'
          viewBox='0 0 400 400'
          className={shouldDisplay ? 'enabled' : 'disabled'}
        >
          {childrenWithProps}
        </svg>
      </div>
    </>
  );
};

export default RadialMenu;
