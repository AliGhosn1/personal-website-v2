import { Route, Routes } from 'react-router-dom';

import Nav from './routes/nav.route';
import Home from './routes/home.route';
import Projects from './routes/projects.route';
import About from './routes/about.route';
import Contact from './routes/contact.route';

import './app.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Nav />}> 
          <Route path='projects' element={<Projects />}/>
        <Route path='about' element={ <About /> }/>
        {/* <Route path='resume' />  */}
        <Route path='contact' element={<Contact />}/>   
      </Route>
    </Routes>
  );
}

export default App;
