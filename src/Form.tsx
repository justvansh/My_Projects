import React, { Component } from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

interface State{
  Value:string;
}


export default class Form extends Component<{},State>{
  state = {
    Value:'Login',
  }

  render() {
    return (
      <>
      <div style={{display:"flex"}}>
      <div style={{display:"flex",height:'100vh'}}>
        <div style={{display:'flex',flexDirection:'column', paddingLeft:"8px",paddingRight:"10px",backgroundColor:'#00ffc0'}}>
          {/* <NavLink to={'/login'}> */}
          <h2 onClick={()=>this.setState({Value:'Login'})}>Login</h2>
          {/* </NavLink> */}

          {/* <NavLink to={'/register'}> */}
          <h2 onClick={()=>this.setState({Value:'Register'})}>Register</h2>
          {/* </NavLink> */}
        </div>
      </div>

        <div>
        {this.state.Value==='Login'?<Login/>:<Register/>}
        </div>

      </div>

      {/* <BrowserRouter>
      <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
      </Routes>
      </BrowserRouter> */}
      {/* <Login/> */}
      </>
    )
  }
}