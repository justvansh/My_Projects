import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from "@mui/material";
import React, { Component } from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";
import RestoreRoundedIcon from "@material-ui/icons/RestoreRounded";
import EqualizerRoundedIcon from "@material-ui/icons/EqualizerRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import WatchLaterRoundedIcon from "@material-ui/icons/WatchLaterRounded";
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';

type Props = {};

type State = {};

export default class Sidebar1 extends Component<Props, State> {
  state = {};

  render() {
    return (
    <Box style={{display:'flex',alignItems:'start'}} position='fixed'>
        <List style={{ height: "100%" }}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <PersonRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsActiveRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Save" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <RestoreRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Archive" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <WatchLaterRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Time spent" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <EqualizerRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Your activity" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SettingsRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <NightsStayRoundedIcon/>
                {/* <WbSunnyRoundedIcon /> */}
              </ListItemIcon>
              <Switch
                // checked={state.checkedB}
                // onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  }
}
