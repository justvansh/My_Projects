import React, { Component, ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface State {
  Name: string;
  Email: string;
  Address: string;
  Password: string;
  Obj:{ 
    name:string,
    email:string,
    addreess:string,
    password:string
   }[];
  Data:{}[];
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '35ch',
      },
    },
    nav: {
      width: 500,
    },
    btn: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

interface Props extends WithStyles<typeof styles> {}

class Form extends Component<Props, State> {
  Data: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Address: '',
      Password: '',
      Obj:[],
      Data:[],
    };
  }


  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name==="Name"){
    this.setState({
      Name: e.target.value,
    });
    }
    else if(e.target.name==="Email"){
      this.setState({
        Email: e.target.value,
      });
    }
    else if(e.target.name==="Address"){
      this.setState({
        Address: e.target.value,
      });
    }
    else if(e.target.name==="Password"){
      this.setState({
        Password: e.target.value,
      });
    }
  };
 
  handleInp = (e:any):void=> {
    // console.log(this.state)
    const { Name,Email,Address,Password, Data } = this.state;
    const newData = { 
      Name: Name,
      Email: Email,
      Address: Address,
      Password: Password
     };
    this.setState({
      Data: [...Data, newData]
      // Email: '', // Clear the input field after pushing the value to the array
    });
    console.log('Data: ',Data);
  }

  render() {
    const { classes } = this.props;
    const { Name, Email, Address, Password,Obj,Data } = this.state;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Register Form</h1>
        <div className={classes.root}>
          <TextField id="outlined-basic" label="Enter Name" variant="outlined" name="Name" value={Name} onChange={this.handleInputChange} />
        </div>
        <div className={classes.root}>
          <TextField id="outlined-basic" label="Enter Email" variant="outlined" name="Email" value={Email} onChange={this.handleInputChange} />
        </div>
        <div className={classes.root}>
          <TextField id="outlined-basic" label="Enter Address" variant="outlined" name="Address" value={Address} onChange={this.handleInputChange} />
        </div>
        <div className={classes.root}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            name="Password"
            value={Password}
            onChange={this.handleInputChange}
          />
        </div>
        <div className={classes.btn}>
          <Button onClick={this.handleInp} variant="outlined" color="primary">
            Submit
          </Button>
        </div>

        {/* <div>
          {
            Obj.map((item)=>{
              return(
                <h1>{item}</h1>
              )
            })
          }
        </div> */}


       {/* <div> { Data.forEach((value: any):void=> {
        return(
          <>
          <Card style={{ backgroundColor: 'skyblue', width: '200px' }} className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.title} color="textSecondary" gutterBottom>
              {value.Name}
            </Typography>
            <Typography variant="h5" component="h2">
              Details:
            </Typography>
            <Typography variant="body2" component="p">
              Email: {value.Email}
              <br />
              Address: {value.Address}
              <br />
              Password: {value.Password}
              <br />
              {'"Wellcome to the community"'}
            </Typography>
          </CardContent>
        </Card>
        <br/>
        </>
        )
        })
        }
        </div> */}


        {/* CARD */}
        {/* <Card style={{ backgroundColor: 'skyblue', width: '200px' }} className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.title} color="textSecondary" gutterBottom>
              NAME
            </Typography>
            <Typography variant="h5" component="h2">
              Details:
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card> */}
      </div>
    );
  }
}

export default withStyles(styles)(Form);