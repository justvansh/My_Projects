import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Button, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';
import './Nav2.css';

interface State {
  anchorElNav: HTMLElement | null;
  anchorElUser: HTMLElement | null;
  Homebtn: boolean;
  Skillbtn: boolean;
  Projectbtn: boolean;
}

interface Props {}

class ResponsiveAppBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Initialize state with values from local storage or default values if not present
    const savedState = localStorage.getItem('navbarState');
    if (savedState) {
      this.state = JSON.parse(savedState);
    } else {
      this.state = {
        anchorElNav: null,
        anchorElUser: null,
        Homebtn: true, // Set default values here
        Skillbtn: false,
        Projectbtn: false,
      };
    }
  }

  componentDidMount() {
    // Save the state in local storage when component mounts
    localStorage.setItem('navbarState', JSON.stringify(this.state));
  }

  handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElNav: event.currentTarget });
  };

  handleCloseNavMenu = () => {
    this.setState({ anchorElNav: null });
  };

  handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElUser: event.currentTarget });
  };

  handleCloseUserMenu = () => {
    this.setState({ anchorElUser: null });
  };
  
  handleHomeBtn = () => {
    this.setState({ Homebtn: true, Skillbtn: false, Projectbtn: false }, () => {
      localStorage.setItem('navbarState', JSON.stringify(this.state)); // Update local storage
    });
  };
  
  handleSkillBtn = () => {
    this.setState({ Skillbtn: true, Homebtn: false, Projectbtn: false }, () => {
      localStorage.setItem('navbarState', JSON.stringify(this.state)); // Update local storage
    });
  };

  handleProjectBtn = () => {
    this.setState({ Projectbtn: true, Homebtn: false, Skillbtn: false }, () => {
      localStorage.setItem('navbarState', JSON.stringify(this.state)); // Update local storage
    });
  };

  render() {
    const { anchorElNav, anchorElUser, Homebtn, Skillbtn, Projectbtn } = this.state;

    return (
      <AppBar style={{ backgroundColor: 'black', paddingLeft: '15px', paddingRight: '10px' }} position="static">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={this.handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={this.handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
              <MenuItem onClick={this.handleCloseNavMenu}>
              <NavLink onClick={() => { this.handleCloseNavMenu(); this.handleProjectBtn(); } } style={{ textDecoration: 'none' }} to={'/'}>
                <Typography textAlign="center">Home</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={this.handleCloseNavMenu}>
              <NavLink onClick={() => { this.handleCloseNavMenu(); this.handleProjectBtn(); } } style={{ textDecoration: 'none' }} to={'/skills'}>
                <Typography textAlign="center">Skills</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={this.handleCloseNavMenu}>
                 <NavLink onClick={() => { this.handleCloseNavMenu(); this.handleProjectBtn(); } } style={{ textDecoration: 'none' }} to={'/project'}>
                <Typography textAlign="center">Projects</Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
            <NavLink onClick={() => {this.handleCloseNavMenu();this.handleHomeBtn();}} style={{ textDecoration: 'none' }} to={'/'}>
              <Button
                className='btn'
                id='btnSize'
                style={{
                  backgroundColor: Homebtn ? 'white' : 'black',
                  color: Homebtn ? 'black' : 'white',
                  margin: '30px 15px 20px',
                  minWidth: '100px',
                }}
                sx={{ color: 'white', display: 'block', fontWeight: 'bold' }}
              ><div>
                Home
                </div>
              </Button>
            </NavLink>

            <NavLink onClick={() => {this.handleCloseNavMenu();this.handleSkillBtn();}} style={{ textDecoration: 'none' }} to={'/skills'}>
              <Button
                className='btn'
                id='btnSize'
                style={{
                  backgroundColor: Skillbtn ? 'white' : 'black',
                  color: Skillbtn ? 'black' : 'white',
                  margin: '30px 15px 20px',
                  minWidth: '100px',
                }}
                sx={{ color: 'white', display: 'block', fontWeight: 'bold' }}
              >
                <div>
                Skills
                </div>
              </Button>
            </NavLink>
            <NavLink onClick={() => {this.handleCloseNavMenu();this.handleProjectBtn();}} style={{ textDecoration: 'none' }} to={'/project'}>
              <Button
                className='btn'
                id='btnSize'
                style={{
                  backgroundColor: Projectbtn ? 'white' : 'black',
                  color: Projectbtn ? 'black' : 'white',
                  margin: '30px 15px 20px',
                  minWidth: '100px',
                }}
                sx={{ color: 'white', display: 'block', fontWeight: 'bold' }}
              >
                Projects
              </Button>
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp"
                style={{ height: 'max(50px,5vh)', width: '50px' }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsW5ooarsY0ZS4ZAiyyT9tpx8Yo3YPGWvNsX8N12aanw&s"
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ResponsiveAppBar;
