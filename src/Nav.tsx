import React, { Component } from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { NavLink } from 'react-router-dom';
// import Form from './Form';
// import Nav from './Nav';
// import NewInp from './NewInp';


const styles = (theme: Theme) =>
createStyles({
    nav: {
        width: 500,
      },
})

interface Props extends WithStyles<typeof styles>{}

class Nav extends React.Component<Props>{
  render() {
    const {classes} = this.props;
    return (<>
        <div style={{height:'80px',width:'100vw',display:'flex', justifyContent:'space-around',backgroundColor:'skyblue',alignItems:'center'}}>
        <NavLink style={{textDecoration:'none',color:'black',fontWeight:"600",fontSize:'25px'}} to={'/'}>
        <div>Home</div>
        </NavLink>

        <NavLink style={{textDecoration:'none',color:'black',fontWeight:"600",fontSize:'25px'}} to={'/form'}>
        <div>Form</div>
        </NavLink>

        <NavLink style={{textDecoration:'none',color:'black',fontWeight:"600",fontSize:'25px'}} to={'/table'}>
        <div>Table</div>
        </NavLink>
        </div>
        </>
    )
  }
}

export default withStyles(styles)(Nav);