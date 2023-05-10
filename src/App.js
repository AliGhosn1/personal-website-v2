import { Route, Routes } from 'react-router-dom';

import Nav from './routes/nav.component';
import Home from './routes/home.component';

import './app.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Nav />}> 
        <Route path='projects' element={<Nav />}/>
        <Route path='about' element={<Nav />}/>
        <Route path='resume' element={<Nav />}/> 
        <Route path='contact' element={<Nav />}/>   
      </Route>
    </Routes>
  );
}

export default App;
