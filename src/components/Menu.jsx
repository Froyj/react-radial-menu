import { useState, useEffect } from 'react';
import Slice from './Slice';
import { getDerivedColor } from '../utils/colors';

const Menu = ({ nbItems = 5, largeRadius = 99, smallRadius = 50 }) => {
  const sliceAngle = (2 * Math.PI) / nbItems;
  const slices = Array.from({ length: nbItems }, (_, i) => ({
    id: i + 1,
    startAngle: sliceAngle * i,
  }));

  const [shouldDisplay, setShouldDisplay] = useState(true);
  const toggleDisplay = (event) => {
    event.preventDefault();
    console.log('toto');
    setShouldDisplay(!shouldDisplay);
    return false;
  };

  return (
    <div onContextMenu={toggleDisplay}>
      {/* {shouldDisplay ? ( */}
        <svg width='400' height='400' viewBox='0 0 400 400' className={shouldDisplay ? "enabled" : "disabled"}>
          <g>
            {slices.map((slice, i) => (
              <Slice
                {...slice}
                key={slice.id}
                angle={sliceAngle}
                largeRadius={largeRadius}
                smallRadius={smallRadius}
                color={getDerivedColor('#0012b8', slice.id)}
              />
            ))}
            <Slice
              angle={2 * Math.PI}
              largeRadius={99}
              smallRadius={70}
              startAngle={0}
              offset={[3, 5]}
            />
            <circle cx='0' cy='0' r='1' />
          </g>
        </svg>
      {/* ) : (
        <div>X</div>
      )} */}
    </div>
  );
};

export default Menu;
