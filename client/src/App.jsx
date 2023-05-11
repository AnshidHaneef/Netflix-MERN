import './app.scss'
import Login from './pages/Login/Login';
import Watch from './pages/Watch/Watch'
import Register from './pages/signup/Register';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Home/>
      <Watch /> 
    <Register/>
    <Login/>
    </div>
  );
}

export default App;
