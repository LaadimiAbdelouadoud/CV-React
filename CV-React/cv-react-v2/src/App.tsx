import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import SectionPrincipale from './SectionPrincipale';
import MeContacter from './Components/MeContacter/MeContacter';

function App() {
  return (
    <Routes>
        <Route path='/' element={<SectionPrincipale/>}/>
        <Route path='/MeContacter' element={<MeContacter/>}/>
    </Routes>
    
  )
}

export default App;
