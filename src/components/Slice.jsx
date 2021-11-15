import { getDerivedColor } from "../utils/colors";

const Slice = ({
  id,
  angle,
  startAngle,
  largeRadius,
  smallRadius,
  offset = [0, 0],
  baseColor = '#8a8a8a',
  children = [],
}) => {
  const [offsetX, offsetY] = offset;
  let largeArcStartX = largeRadius * Math.cos(startAngle) - offsetX;
  let largeArcStartY = largeRadius * Math.sin(startAngle) - offsetY;
  let largeArcEndX = largeRadius * Math.cos(startAngle + angle) - offsetX;
  let largeArcEndY = largeRadius * Math.sin(startAngle + angle) - offsetY;
  let smallArcStartX = smallRadius * Math.cos(startAngle) - offsetX;
  let smallArcStartY = smallRadius * Math.sin(startAngle) - offsetY;
  let smallArcEndX = smallRadius * Math.cos(startAngle + angle) - offsetX;
  let smallArcEndY = smallRadius * Math.sin(startAngle + angle) - offsetY;
  return (
    <>
      <path
        d={`
      M${smallArcStartX},${-smallArcStartY} 
      L${largeArcStartX},${-largeArcStartY}
      A${largeRadius},${largeRadius},0,0,0,${largeArcEndX},${-largeArcEndY}
      L${largeArcEndX},${-largeArcEndY} ${smallArcEndX},${-smallArcEndY}
      A${smallRadius},${smallRadius},0,0,1,${smallArcStartX},${-smallArcStartY}Z
      `}
        fill={getDerivedColor(baseColor, id)}
        onClick={() => {
          console.log('banane');
        }}
      />
    </>
  );
};

export default Slice;
