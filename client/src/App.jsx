import './app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
// import Watch from './pages/Watch/Watch'
import Register from './pages/signup/Register';
import Home from './pages/Home/Home';


function App() {
  return (
    
<Router>
<Routes>
<Route exact path='/' element={ <Home/> } />
<Route exact path='/login' element={ <Login/> } />
<Route exact path='/register' element={ <Register/> } />
</Routes>
</Router>

  );
}

export default App;
