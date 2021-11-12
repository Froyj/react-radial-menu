function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getDerivedColor(color, id) {
  const alpha = 1 - (id / 7)
  const hexStrings = color.split('');
  const hexColors = [
    hexStrings.slice(1, 3).join(''),
    hexStrings.slice(3, 5).join(''),
    hexStrings.slice(5, 7).join(''),
  ];
  const intColors = hexColors.map((hex) => parseInt(hex, 16));
  const rgbStr = `rgb(${intColors[0]},${intColors[1]},${intColors[2]},${alpha})`;
  console.log(rgbStr)
  return rgbStr;
}

getDerivedColor('#f3f600', 4);

export { getRandomColor, getDerivedColor }