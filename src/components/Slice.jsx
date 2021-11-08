function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}

const Slice = ({ angle, startAngle, endAngle, largeRadius, smallRadius }) => {
  let largeArcStartX = largeRadius * Math.cos(startAngle);
  let largeArcStartY = largeRadius * Math.sin(startAngle);
  let largeArcEndX = largeRadius * Math.cos(endAngle);
  let largeArcEndY = largeRadius * Math.sin(endAngle);
  let smallArcStartX = smallRadius * Math.cos(startAngle);
  let smallArcStartY = smallRadius * Math.sin(startAngle);
  let smallArcEndX = smallRadius * Math.cos(endAngle);
  let smallArcEndY = smallRadius * Math.sin(endAngle);

  if ((startAngle <= 0) && (startAngle <= 180)) {
    largeArcStartY = -largeArcStartY
    smallArcStartY = -smallArcStartY
    largeArcEndY = -largeArcEndY
    smallArcEndY = -smallArcEndY
  }

  return (
    <path
      d={`
        M 0,0 ${smallArcStartX},${smallArcStartY} 
        L${largeArcStartX},${largeArcStartY}
        A${largeRadius},${largeRadius},0,0,1,${largeArcEndX},${largeArcEndY}
        L${largeArcEndX},${largeArcEndY} ${smallArcEndX},${smallArcEndY}
        A${smallRadius},${smallRadius},0,0,0,${smallArcStartX},${smallArcStartY}
        Z
        `}
      fill={getRandomColor()}
    />
  );
};

export default Slice;
