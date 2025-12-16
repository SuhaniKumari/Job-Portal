import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Error from './pages/Error';
import CandidateDashboard from './pages/CandidateDashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Logout from './pages/Logout';
import Services from './pages/Services';
import Adminlayout from '../layouts/Adminlayout';
import Adminusers from './pages/Adminusers';
import Admincontact from './pages/Admincontact';
function App() {
  const [count, setCount] = useState(0)

  return (
    
<Router>
  <div>
    <Routes>
      <Route exact path= "/" element = { <Home></Home>}/>
      <Route exact path= "/about" element = { <About></About>}/>
      <Route exact path= "/contact" element = { <Contact></Contact>}/>
      <Route exact path= "/services" element = { <Services></Services> }/>
      <Route exact path= "/register" element = { <Register></Register>}/>
      <Route exact path= "/login" element = { <Login></Login>}/>
      <Route exact path= "/logout" element = { <Logout></Logout>}/>
      <Route exact path= "*" element = { <Error></Error>}/>
      <Route exact path= "/candidatedashboard" element = { <CandidateDashboard></CandidateDashboard> }/>
    
    <Route path = "/admin" element = {<Adminlayout></Adminlayout>}>
      <Route path = "users" element = {<Adminusers></Adminusers>}/>
      <Route path = "contact" element = {<Admincontact></Admincontact>}/>

    </Route>
    
    </Routes>
  </div>
</Router>
    
    
  )
}

export default App
