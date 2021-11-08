import Slice from './Slice';

const Menu = ({ nbItems = 3, largeRadius = 99, smallRadius = 70}) => {
  const sliceAngle = 360 / nbItems;
  const slices = Array.from({ length: nbItems }, (_, i) => ({
    startAngle: sliceAngle * (i),
    endAngle: sliceAngle * (i+1),
  }));

  return (
    <svg width='200' height='200' viewBox='0 0 200 200'>
      <g transform='translate(100,100)' stroke='#000' strokeWidth='2px'>
        {slices.map((slice, i) => (
          <Slice
            {...slice}
            angle={sliceAngle*i}
            largeRadius={largeRadius}
            smallRadius={smallRadius}
          />
        ))}
        <Slice angle={120} largeRadius={99} smallRadius={70} startAngle={0} endAngle={20}/>
        <circle cx="0" cy="0" r="1"  />
      </g>
    </svg>
  );
};

export default Menu;
