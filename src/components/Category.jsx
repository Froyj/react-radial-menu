import React from 'react';

const Category = ({ children, color, startAngle, totalAngle, smallRadius, largeRadius }) => {
  const totalSlices = children.length;
  const sliceAngle = totalAngle / totalSlices;
  let angleToStartSliceFrom = startAngle;

  const childrenWithProps = React.Children.map((children), (child, i) => {
    const sliceStartAngle = angleToStartSliceFrom;
    angleToStartSliceFrom += sliceAngle;
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    console.log(child)
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        id: i,
        baseColor: color,
        angle: sliceAngle,
        startAngle: sliceStartAngle,
        smallRadius,
        largeRadius

      });
    }
    return child;
  });
  return <g transform='translate(200, 200)'>{childrenWithProps}</g>;
};

export default Category;
