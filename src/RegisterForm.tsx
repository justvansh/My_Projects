import React, { Component } from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Password from 'antd/es/input/Password';

type Props = {}

interface State {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2).max(15).required('First Name is required'),
    lastName: Yup.string().min(2).max(15).required('Last Name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6).max(8).required('Password is required'),
    confirmPassword: Yup.string().required().oneOf([Yup.ref("password"),' '],"Password must match"),
  });

export default class RegisterForm extends Component<Props, State> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  render() {
    return (
      <div style={{width:"100vw",height:"100vh",display:"flex", flexDirection:"column", padding:"20px 20px", justifyContent:"center", alignItems:"center"}}>
      <div style={{width:"30%"}}>
        <h1 style={{color:"black"}}>Register Form</h1>
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
            <TextField style={{width:"100%"}} id="outlined-basic" label="User Name" type='email' name='user_name' variant="outlined" value={values.firstName} onChange={handleChange} autoComplete="off" onBlur={handleBlur}
            error={!!errors.firstName}
            helperText={ errors.firstName && touched.firstName ? <p style={{fontSize:"13px", color:"red"}}>{errors.firstName}</p>:null }
            />
            </div>
            <div style={{marginBottom:"8px"}}>
            <TextField style={{width:"100%"}} id="outlined-basic" label="User Name" type='email' name='user_name' variant="outlined" value={values.firstName} onChange={handleChange} autoComplete="off" onBlur={handleBlur}
            error={!!errors.firstName}
            helperText={ errors.firstName && touched.firstName ? <p style={{fontSize:"13px", color:"red"}}>{errors.firstName}</p>:null }
            />
            </div>
            <div style={{marginBottom:"8px"}}>
            <TextField style={{width:"100%"}} id="outlined-basic" label="First Name" type='text' name='firstName' variant="outlined" value={values.firstName} onChange={handleChange} autoComplete="off" onBlur={handleBlur}
            error={!!errors.firstName}
            helperText={ errors.firstName && touched.firstName ? <p style={{fontSize:"13px", color:"red"}}>{errors.firstName}</p>:null }
            />
            </div>
            <div style={{marginBottom:"8px"}}>
            <TextField style={{width:"100%"}} id="outlined-basic" label="Last Name" type='text' name='lastName' variant="outlined" value={values.lastName} onChange={handleChange} autoComplete="off" onBlur={handleBlur}
            error={!!errors.lastName}
            helperText={ errors.lastName && touched.lastName ? <p style={{fontSize:"13px", color:"red"}}>{errors.lastName}</p>:null }
            />
            </div>
            <div style={{marginBottom:"8px"}}>
            <TextField style={{width:"100%"}} id="outlined-basic" label="User Name" type='email' name='email' variant="outlined" value={values.email} onChange={handleChange} autoComplete="off" onBlur={handleBlur}
            error={!!errors.email}
            helperText={ errors.email && touched.email ? <p style={{fontSize:"13px", color:"red"}}>{errors.email}</p>:null }
            />
            </div>
            <div style={{marginBottom:"8px"}}>
            <TextField style={{width:"100%"}} id="outlined-basic" label="Password" type='password' name='password' variant="outlined" value={values.password} onChange={handleChange} autoComplete="off" onBlur={handleBlur}
            error={!!errors.password}
            helperText={ errors.password && touched.password ? <p style={{fontSize:"13px", color:"red"}}>{errors.password}</p>:null }
            />
            </div>
            <div style={{marginBottom:"8px"}}>
            <TextField style={{width:"100%"}} id="outlined-basic" label="Conform Password" type='password' name='conformPassword' variant="outlined" value={values.confirmPassword} onChange={handleChange} autoComplete="off" onBlur={handleBlur}
            error={!!errors.confirmPassword}
            helperText={ errors.confirmPassword && touched.confirmPassword ? <p style={{fontSize:"13px", color:"red"}}>{errors.confirmPassword}</p>:null }
            />
            </div>
            <Button
              variant="contained"
              color="primary"
              type='submit'
              disabled={isSubmitting}
              style={{backgroundColor:"black",width:"100%"}}
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