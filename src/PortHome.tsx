import React, { Component } from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import CallIcon from '@material-ui/icons/Call';
import './Port.css';
// import { InstagramOutlined } from '@ant-design/icons';
{/* <InstagramOutlined /> */}

const styles = (theme: Theme) =>
createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
    body:{
      margin:'0',
      padding:'0',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:"100vh",
      maxWidth:'100vw',
      backgroundColor:'black',
      backgroundImage:'url(https://img.freepik.com/free-vector/gradient-abstract-background_23-2149961563.jpg)',
      backgroundSize:'cover',
      fontFamily:'"Segoe UI Emoji"',
      fontWeight:'bold',
      color:'white'
    },
    content:{
      margin:'0',
      display:'flex',
      flexDirection:'column',
    },
    head:{
      margin:'5px'
    },
    subhead:{
      display:'flex',
      flexWrap: 'wrap',
      margin:'5px',
    },
    subheadRed:{
      color:'red'
    },
    btn1:{
      backgroundColor:'skyblue',
      color:'black',
      border:'0',
      borderRadius:'25px',
    },
    btn2:{
      backgroundColor:'rgba(0,0,0,0)',
      border:'2px solid white',
      borderRadius:'25px',
    },
})

interface Props extends WithStyles<typeof styles>{}

// type State = {}

class PortHome extends React.Component<Props> {
 constructor(props:Props){
     super(props)
 }

  render() {
  const {classes}=this.props;
    return (
      <div className={classes.body}>
        {/* Contant */}
        <div style={{padding:'10px'}}>
            <div className={classes.content}>
            <Fade in={true} style={{transition:'ease-in',transitionDelay:"300ms",transitionDuration:'0.6s'}} >
              <div id='head' className={classes.head}>Hi There 👋</div>
            </Fade>

            <Fade in={true} style={{transition:'ease-in',transitionDelay:"400ms",transitionDuration:'1s'}} >
              <div id='head' className={classes.head}>I'm Vansh Shukla</div>
            </Fade>

            <Fade in={true} style={{transition:'ease-in',transitionDelay:"500ms",transitionDuration:'1.5s'}} >
              <div id='subhead' className={classes.subhead}><div style={{paddingRight:'1vw'}}>I'm a
              </div>
              <Fade in={true} style={{transition:'ease-in',transitionDelay:"500ms",transitionDuration:'1s'}} >
              <div className={classes.subheadRed}> Web Developer</div>
              </Fade>
              </div>
            </Fade>
              <div>
              <div className={classes.root}>
                <br/>
              <Button id='btn1' className={classes.btn1} variant="contained" color="primary" endIcon={<ArrowForwardIosOutlinedIcon fontSize="large" />}>
               About Me
              </Button>
              <NavLink to={'/contact'}>
              <Button id='btn2' className={classes.btn2} variant="contained" color="secondary" endIcon={<CallIcon fontSize="large" />}>
              Contact
              </Button>
              </NavLink>
              </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PortHome);