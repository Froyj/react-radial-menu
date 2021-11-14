import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Icons = ({ displayRadius, angle, startAngle }) => {
  return slices.map((s) => {
    
    const {angle, startAngle} = s;
    return (
      <>
        <FontAwesomeIcon icon={faCoffee} transform={{ x: -200, y: -200 }} />
      </>
    );
  });
};

export default Icons;
