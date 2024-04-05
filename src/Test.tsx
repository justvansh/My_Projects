import {
  AppBar,
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Toolbar,
} from "@mui/material";
import React, { Component } from "react";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import Main from "./Main";
// import { LineChart } from "@mui/x-charts";
// import { Typography } from "antd";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar1 from "./Sidebar1";
import Appbar from "./Appbar";

const styles = (theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      display: "flex",
      width: "90%",
    },
    select: {
      width: "25%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    chart: {
      width: "75%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
  });

interface Props extends WithStyles<typeof styles> {}

type State = {};

class Project01 extends React.Component<Props, State> {

  render() {
    return (
      <Box style={{height:"100vh",width:'100vw',paddingTop:'80px'}}>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <Appbar/>
          </Grid>
          <Grid item lg={2} sx={{display:{xs:'none',md:"flex"},height:"100vh"}} spacing={0}>
            <Sidebar1/>
          </Grid>
          <Grid item xs={12} md={8}>
            <Main/>
          </Grid>
          <Grid item md={2} lg={2} sx={{height:"100vh",display:{xs:"none",md:"flex"}}}>
            <h3 style={{ backgroundColor: "skyblue", width:"100%",height:'100%' }}>item 4</h3>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(Project01);
