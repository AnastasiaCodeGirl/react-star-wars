
import React from 'react'; // Add the missing import statement for React
import styles from './App.module.css';

import {getApiResource} from '../../utils/network';

const App= () =>{
  return (
    <h1 className={styles.header}>Hello</h1>
  )
}

export default App;
