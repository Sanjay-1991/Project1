import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from './pages/About';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <div
   Style = {{
      backgroundImage:
      'url("https://images.freeimages.com/images/large-previews/23f/paper-curls-1143616.jpg")',
   }}
   >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter></div>
  );
}

export default App;
