import RadialMenu from '../components/RadialMenu';
import Category from '../components/Category';
import Slice from '../components/Slice';
import { faFile, faCog, faStar, faGamepad, faGasPump } from '@fortawesome/free-solid-svg-icons';

const ExampleMenu = () => {
  return (
    <RadialMenu radius={200} >
      <Category color="#36A736">
        <Slice label={'Create a new file'} icons={faFile}/>
        <Slice label={'Create a new file'} icons={faCog}/>
        <Slice label={'Create a new file'} icons={faStar}/>
      </Category>
      <Category color="#E6E62B">
        <Slice label={'Create a new file'} icons={faGamepad}/>
        <Slice label={'Create a new file'} icons={faStar}/>
        <Slice label={'Create a new file'} icons={faGasPump}/>
        <Slice label={'Create a new file'} icons={faFile}/>
      </Category>
    </RadialMenu>   
  );
}

export default ExampleMenu;