import { Box, Button, FormControl, InputLabel, Select } from "@mui/material";
import React, { Component } from "react";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import { LineChart } from "@mui/x-charts";

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
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div style={{ height: "100vh",display:'flex'}}>
        <Box
          component="span"
          className={classes.select}
          style={{ borderRight: "5px solid black" }}
        >
            <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple">
              Select Destrict
            </InputLabel>
            <Select
              native
              //   value={state.age}
              //   onChange={}
              inputProps={{
                name: "age",
                id: "filled-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple">
              Select First State
            </InputLabel>
            <Select
              native
              //   value={state.age}
              //   onChange={}
              inputProps={{
                name: "age",
                id: "filled-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-native-simple">
              Select Second State
            </InputLabel>
            <Select
              native
              //   value={state.age}
              //   onChange={}
              inputProps={{
                name: "age",
                id: "filled-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary">
            Compare
          </Button>
        </Box>

        <Box>
          <div style={{ margin: "50px" }}>
            <LineChart
              xAxis={[
                {
                  scaleType: 'band',
                  data: [
                    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
                    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
                    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
                  ],
                  label:"Years"
                },
              ]}
              series={[
                {
                  data: [
                    4851, 4823, 4784, 4732, 4666, 4589, 4503, 4412, 4319, 4226,
                    4137, 4053, 3978, 3912, 3858, 3816, 3789, 3747, 3724, 3688,
                    3652, 3618, 3575, 3550, 3502, 3466, 3435, 3393, 3361, 3307,
                  ],
                  label: "ABEJORRAL",
                },
                {
                  data: [
                    3201, 3214, 3222, 3220, 3209, 3187, 3158, 3121, 3076, 3027,
                    2971, 2912, 2856, 2799, 2744, 2690, 2636, 2570, 2504, 2458,
                    2397, 2336, 2290, 2231, 2175, 2128, 2075, 2019, 1971, 1918,
                  ],
                  label: "ABRIAQUI",
                },
              ]}
              height={600}
              width={1000}
              margin={{ top: 10, bottom: 20 }}
            />
          </div>
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(Project01);
