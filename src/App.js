import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import './App.css'
import Testeador from './components/Testeador/Testeador'
import Home from './Pages/Home'
import NavBar from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


    
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path=':testeador' element={<Testeador />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App