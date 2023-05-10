import { Route, Routes } from 'react-router-dom';

import Nav from './routes/nav.component';
import Home from './routes/home.component';
import Projects from './routes/projects.route';

import './app.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Nav />}> 
          <Route path='projects' element={<Projects />}/>
        <Route path='about' />
        <Route path='resume' /> 
        <Route path='contact' />   
      </Route>
    </Routes>
  );
}

export default App;
