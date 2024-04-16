import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Sign_In from './Components/Sign_In';
import Sign_up from './Components/Sign_up';
import Profile from './Components/Profile';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/signin' element={<Sign_In/>}/>
  <Route path='/signup' element={<Sign_up/>}/>
  <Route path='/profile' element={<Profile/>}/>

</Routes>

</BrowserRouter>
  );
}

export default App;
