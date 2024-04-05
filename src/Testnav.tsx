import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {}

type State = {}

export default class Nav2 extends React.Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <Box sx={{ flexGrow: 1}}>
      <AppBar style={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1 ,fontFamily: 'monospace',fontSize:'27px',fontWeight:'600'}}>
            Home
          </Typography>

          <Typography variant="h6" component="div" sx={{flexGrow: 1 ,fontFamily: 'monospace',fontSize:'25px',fontWeight:'600'}}>
            Skills
          </Typography>

          <Typography variant="h6" component="div" sx={{flexGrow: 1 ,fontFamily: 'monospace',fontSize:'25px',fontWeight:'600'}}>
            Project
          </Typography>
          <Button 
          sx={{fontFamily: 'monospace',fontSize:'20px',fontWeight:'600'}}
          color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      </div>
    )
  }
}