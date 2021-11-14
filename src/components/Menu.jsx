import { useState, useEffect } from 'react';
import Slice from './Slice';
import { getDerivedColor } from '../utils/colors';

import Icons from './Icons';

const Menu = ({ nbItems = 5, largeRadius = 99, smallRadius = 50 }) => {
  const sliceAngle = (2 * Math.PI) / nbItems;
  const slices = Array.from({ length: nbItems }, (_, i) => ({
    id: i + 1,
    startAngle: sliceAngle * i,
  }));

  // Icons display variables
  const iconsRadius = largeRadius - (largeRadius - smallRadius) / 2;

  const [shouldDisplay, setShouldDisplay] = useState(true);
  const toggleDisplay = (event) => {
    event.preventDefault();
    setShouldDisplay(!shouldDisplay);
    return false;
  };

  return (
    <div onContextMenu={toggleDisplay}>
      <svg
        width='400'
        height='400'
        viewBox='0 0 400 400'
        className={shouldDisplay ? 'enabled' : 'disabled'}
      >
        <g transform='translate(200, 200)'>
          {slices.map((slice, i) => (
            <>
              <Slice
                {...slice}
                key={slice.id}
                angle={sliceAngle}
                largeRadius={largeRadius}
                smallRadius={smallRadius}
                color={getDerivedColor('#233444', slice.id)}
              ></Slice>
            </>
          ))}
        </g>
      </svg>
      <Icons displayRadius={iconsRadius} />
    </div>
  );
};

export default Menu;
