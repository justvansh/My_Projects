import React, { Component } from 'react';
import { Route , Routes } from 'react-router-dom';
// import Nav from './Nav';
import Nav2 from './Nav2';
// import Form from './Form';
// import Table from './Table';
// import Home from './Home';
// import Login from './Login';
// import Register from './Register';
import PortHome from './PortHome';
import PortSkills from './PortSkills';
import PortProject from './PortProject';
import Contact from './Contact';
import RegisterForm from './RegisterForm';
import Charts from './Charts';
import Project01 from './Project01';
import Test from './Test';

import './Port.css';



export default class App extends Component {
  render() {
    return (
      <>
      {/* <Project01/> */}
      <Test/>


      {/* <Charts/> */}
      {/* <Contact/> */}
      {/* <RegisterForm/> */}


      {/* <Nav2/>
      <Routes>
          <Route path="/" Component={PortHome} />
          <Route path="/skills" Component={PortSkills} />
          <Route path="/project" Component={PortProject} />
          <Route path="/contact" Component={Contact} />
      </Routes>  */}

      {/* <Nav/>
      <Routes>
          <Route path="/" Component={Home} />
          
          <Route path="/form" Component={Form} />
          <Route path="/table" Component={Table} />
          <Route path="/login"  element={<Form/>} />
          <Route path="/register" element={<Register/>} />
      </Routes> */}
      </>
    )
  }
}