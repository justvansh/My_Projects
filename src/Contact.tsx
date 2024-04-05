import React from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';


const styles = (theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
              margin: theme.spacing(1),
              width: '25ch',
            },
          },
          button: {
            margin: theme.spacing(1),
          },
    })

const validationSchema = Yup.object().shape({
      user_name: Yup.string().email().required('User Name is required'),
      password: Yup.string().min(6).max(8).required('Password is required'),
    });



interface Props extends WithStyles<typeof styles> {}

interface State {
  user_name:string;
  password:string;
}


class Contact extends React.Component<Props, State> {
  constructor(props:Props){
    super(props);
    this.state = {
      user_name:'',
      password:''
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{width:"100vw",height:"100vh",display:"flex", flexDirection:"column", padding:"20px 20px", justifyContent:"center", alignItems:"center"}}>
      <div>
        <h1>Login Form</h1>
        <Formik
          initialValues={this.state}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Values',values);
          }}
          >
         {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
        <div style={{marginBottom:"8px"}}>
        <TextField id="outlined-basic" label="User Name" type='email' name='user_name' variant="outlined" value={values.user_name} onChange={handleChange} autoComplete="off" onBlur={handleBlur}
        error={!!errors.user_name}
        helperText={ errors.user_name && touched.user_name ? <p style={{fontSize:"13px", color:"red"}}>{errors.user_name}</p>:null }
        />
        </div>
        <div style={{marginBottom:"8px"}}>
        <TextField id="outlined-basic" label="Password" type='password' name='password' variant="outlined" value={values.password} onChange={handleChange} autoComplete="off" onBlur={handleBlur}
        error={!!errors.password}
        helperText={ errors.password && touched.password ? <p style={{fontSize:"13px", color:"red"}}>{errors.password}</p>:null }
        />
        </div>
        <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type='submit'
              disabled={isSubmitting}
              style={{width:"100%",marginLeft:"0px",backgroundColor:"black"}}
            >
              Submit
            </Button>
          </form>
          )}
      </Formik>
      </div>
    </div>
    )
  }
}

export default withStyles (styles) (Contact);