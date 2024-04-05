import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";

type Props = {};

interface State {
  isMenu: boolean;
}

export default class Appbar extends Component<Props, State> {
  state = {
    isMenu: false,
  };

  render() {
    const { isMenu } = this.state;
    return (
      <Box>
        <AppBar
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Toolbar
            sx={{
              justifyContent: "start",
              width: "60%",
            }}
            variant="dense"
          >
            <h2 style={{ color: "white" }}>LOGO</h2>
          </Toolbar>
          <Toolbar
            sx={{
              justifyContent: "end",
              width: "40%",
              paddingRight: "7px",
            }}
            variant="dense"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbdcz05OSsczviHYRhfykUaA67HLLJKlkGRkc0WrfwvWNH-2gtggvevkhRIYZLV6L09gg&usqp=CAU"
            />
            <Toolbar
              sx={{
                display: { xs: "flex", md: "none" },
                p: "0",
                padding: "0",
                margin: "0",
              }}
            >
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(e) => this.setState({ isMenu: true })}
                sx={{ color: "white", padding: "10px", margin: "0" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                open={isMenu}
                onClose={(e) => this.setState({ isMenu: false })}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem>Home</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
              </Menu>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
