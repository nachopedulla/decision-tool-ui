import { useState } from 'react';
import Header from './components/header/Header';
import Chooser from './components/chooser/Chooser';
import './App.css';


function App() {

  let [options, setOptions] = useState([])



  return (
    <div className='App'>
        <Header/>
        <div className='content'>
          <Chooser/>
        </div>
    </div>
  );
}

export default App;
