import { useState } from 'react';

const RadialMenu = ({ children }) => {
  const totalItems = children.reduce((carry, current) => {
    return (carry += current.props.children.length);
  }, 0);

  const sliceAngle = (2 * Math.PI) / totalItems;
  const slices = Array.from({ length: totalItems }, (_, i) => ({
    id: i + 1,
    startAngle: sliceAngle * i,
  }));

  const [shouldDisplay, setShouldDisplay] = useState(true);
  const toggleDisplay = (event) => {
    event.preventDefault();
    setShouldDisplay(!shouldDisplay);
    return false;
  };
  return (
    <>
      <div onContextMenu={toggleDisplay}>
        <svg
          width='400'
          height='400'
          viewBox='0 0 400 400'
          className={shouldDisplay ? 'enabled' : 'disabled'}
        >
          {children}
        </svg>
      </div>
    </>
  );
};

export default RadialMenu;
