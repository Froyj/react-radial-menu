const SvgCircle = () => {
  return (
    // <svg height="300" viewBox="0px 0px 200px 200px" xmlns='http://www.w3.org/2000/svg'>
    //   <circle cx='150' cy='150' r='100' fill="red" pathLength="calc(50 *  471.24/100)"/>
    //   {/* <circle cx='150' cy='150' r='75' fill="transparent" stroke="yellow" strokeWidth="50"  strokeDasharray="calc(50 *  471.24/100) 471.24" /> */}
    // </svg>
    <svg width="200" height="200" viewBox="0 0 200 200">
    <g transform="translate(100,100)" stroke="#000" stroke-width="2">
      <path d="M0 0-70 70A99 99 0 0 1-70-70Z" fill="#f00"/>
      <path d="M0 0-70-70A99 99 0 0 1 70-70Z" fill="#080"/>
      <path d="M0 0 70-70A99 99 0 0 1 70 70Z" fill="#dd0"/>
      <path d="M0 0 70 70A99 99 0 0 1-70 70Z" fill="#04e"/>
    </g>
  </svg>
  
  );
};

export default SvgCircle;
