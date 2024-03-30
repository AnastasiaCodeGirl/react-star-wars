import React from 'react'; // Add the missing import statement for React
import PeoplePage from '../PeoplePage';
import styles from './App.module.css';

import {getApiResource} from '../../utils/network';

const App= () =>{
  return (
    <PeoplePage />
  )
}

export default App;
