import React, { Component } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Modal, Form, Input, Button } from 'antd';
import Button2 from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// interface Props WithStyles<typeof Styles>{}

interface State {
    Obj:any[];
    isModalVisible: boolean;
    isModalVisible2: boolean;
    id: string;
    firstName: string;
    lastName:string;
    age:string; 
    email:string;
    ip:string;
    password:string;
    phone:string;
    username:string;
    domain:string;
    bloodgroup:string;
    search:string;
    EditUsr:{
      id:any,
      firstName:any,
      lastName:any,
      age:any,
      email:any,
      ip:any,
      password:any,
      phone:any,
      username:any,
      domain:any,
      bloodgroup:any,
    };
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '35ch',
      },
    },
  })

interface Props extends WithStyles<typeof styles>{}

class Table extends Component <Props, State>{

constructor(props: Props) {
    super(props);
    this.state = {
      Obj:[],
      isModalVisible: false,
      isModalVisible2: false,
      id:'',
      firstName:'',
      lastName:'',
      age:'',
      email:'',
      ip:'',
      password:'',
      phone:'',
      username:'',
      domain:'',
      bloodgroup:'',
      search:'',
      EditUsr:{
      id:'',
      firstName:'',
      lastName:'',
      age:'',
      email:'',
      ip:'',
      password:'',
      phone:'',
      username:'',
      domain:'',
      bloodgroup:'',
      },
  };
  }

    componentDidMount(): void {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((r:any)=>{
                const {users}=r;
                // console.log(users);
                const NWEOBJ= users.map((data:any)=>{
                    return data
                    // console.log(data);
                })
                this.setState({Obj:NWEOBJ});
            });
    }
    
    
render() {
let { id, firstName, lastName, age, email, ip, password, phone, username, domain, bloodgroup, search, EditUsr} = this.state;

const {Obj}=this.state;
let rows:any = Obj.filter((obj:any) => {
    return search.toLowerCase() === '' ? obj: obj.firstName.toLowerCase().includes(search)})
    .map((obj:any)=>{
    return  { id: obj.id, lastName: obj.lastName, firstName: obj.firstName, age: obj.age, email:obj.email ,ip: obj.ip , password: obj.password , phone: obj.phone,username: obj.username, domain: obj.domain, bloodGroup: obj.bloodGroup};
});

let columns: GridColDef[]= [
  { field: 'id', headerName: 'ID', width: 140 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
    }`,
 },
 {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
 {
    field: 'ip',
    headerName: 'IP',
    width: 140,
    editable: true,
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone Number',
    width: 180,
    editable: true,
  },
  {
    field: 'username',
    headerName: 'UserName',
    width: 160,
    editable: true,
  },
  {
    field: 'domain',
    headerName: 'Domain',
    width: 140,
    editable: true,
  },
  {
    field: 'bloodGroup',
    headerName: 'Bloodgroup',
    width: 150,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell:(params)=>(
      <div>
        <Button2 style={{marginRight:'3px',border:'2px',borderStyle:'solid',borderRadius:'6px'}} onClick={()=>{
        const EditUser:any = params.row;
        console.log(EditUser)
        this.setState(()=> ({EditUsr: {...EditUser}}))
        this.setState({isModalVisible2:true});
        // console.log("EditUsr",EditUsr)
      }} color="primary">
          Edit
        </Button2>
        <Button2 style={{border:'2px',borderStyle:'solid',borderRadius:'6px'}} onClick={()=>{handelDelete(params)}} color="secondary">
          Delete
        </Button2>
      </div>
    )
 },
];
console.log("EditUsr",EditUsr)

const handelDelete=(params:any):any=>{
  let OBJ = Obj;
  let index:any= OBJ.findIndex((users:any)=>{
    return users.id === params.row.id;
  })
  if (window.confirm('Are you sure you want to delete this user?')) {
  OBJ.splice(index,1);
  let OBJ2 = OBJ.map((item:any,i:any)=> {
    return {...item,id:i+1}
  });
  this.setState({Obj:OBJ2});
}
}

  const showModal = () => {
        this.setState({isModalVisible:true})
      };


      const handleOk = () => {
        let { Obj, id, firstName, lastName, age, email, ip, password , phone, username, domain ,bloodgroup}=this.state;
        let UserObj:any= {
          id: id,
          lastName: lastName ,
          firstName: firstName ,
          age: age ,
          email: email ,
          ip: ip ,
          password: password ,
          phone: phone ,
          username: username ,
          domain: domain ,
          bloodGroup: bloodgroup
        }
        
        this.setState({Obj:[...Obj,UserObj]})
        this.setState({isModalVisible:false});
        this.setState({id:''});
      };
      const handleCancel = () => {
        this.setState({isModalVisible:false})
      };

      const handleOk2 = () => {
        this.setState({isModalVisible2:false});
      }
      const handleCancel2 = () => {
        this.setState({isModalVisible2:false})
      };
    
      
const {classes}=this.props;
return (<>
      <div style={{width:'200px'}}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={rows.map((option:any) => option.firstName)}
        onChange={(e:any)=>{
          let txt:string = e.target.innerHTML;
          this.setState({search:txt.toLowerCase()})
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            value={search}
            onChange={e=>this.setState({search:e.target.value})}
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
      </div>

    <div>
      {/* MODAL1 */}
      <Modal title="My Form" visible={this.state.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
        <Form.Item label="ID" name="id" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({id:e.target.value})} value={EditUsr.id}/>
          </Form.Item>

          <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({firstName:e.target.value})} value={firstName}/>
          </Form.Item>

          <Form.Item label=" Last Name" name="lastName" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({lastName:e.target.value})} value={lastName}/>
          </Form.Item>

          <Form.Item label="Age" name="age" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({age:e.target.value})} value={age}/>
          </Form.Item>

          <Form.Item label="Eamil" name="email" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({email:e.target.value})} value={email}/>
          </Form.Item>

          <Form.Item label="IP" name="ip" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({ip:e.target.value})} value={ip}/>
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({password:e.target.value})} value={password}/>
          </Form.Item>

          <Form.Item label="Phone No." name="phone" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({phone:e.target.value})} value={phone}/>
          </Form.Item>

          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({username:e.target.value})} value={username}/>
          </Form.Item>

          <Form.Item label="Domain" name="domain" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({domain:e.target.value})} value={domain}/>
          </Form.Item>

          <Form.Item label="Bloodgroup" name="bloodgroup" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({bloodgroup:e.target.value})} value={bloodgroup}/>
          </Form.Item>
          {/* Add more form fields as needed */}
        </Form>
      </Modal>
    </div>

    <div>
      {/* MODEL2 */}
       <Modal title="Edit Details" visible={this.state.isModalVisible2} onOk={handleOk2} onCancel={handleCancel2}>
         <Form>
         <Form.Item label="ID" name="id" rules={[{ required: true, message: 'Please input your name!' }]}>
             <Input value={EditUsr.id} onChange={e=>this.setState(prevState => ({
        EditUsr: {
          ...prevState.EditUsr,
          id: e.target.value
        }
      }))} />
           </Form.Item>

           <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please input your name!' }]}>
             <Input onChange={e=>this.setState({firstName:e.target.value})} value={EditUsr.firstName}/>
           </Form.Item>

           <Form.Item label=" Last Name" name="lastName" rules={[{ required: true, message: 'Please input your name!' }]}>
             <Input onChange={e=>this.setState({lastName:e.target.value})} value={EditUsr.lastName}/>
           </Form.Item>

           <Form.Item label="Age" name="age" rules={[{ required: true, message: 'Please input your name!' }]}>
             <Input onChange={e=>this.setState({age:e.target.value})} value={EditUsr.age}/>
           </Form.Item>

           <Form.Item label="Eamil" name="email" rules={[{ required: true, message: 'Please input your name!' }]}>
             <Input onChange={e=>this.setState({email:e.target.value})} value={EditUsr.email}/>
           </Form.Item>

           <Form.Item label="IP" name="ip" rules={[{ required: true, message: 'Please input your name!' }]}>
             <Input onChange={e=>this.setState({ip:e.target.value})} value={EditUsr.ip}/>
           </Form.Item>

           <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your name!' }]}>
             <Input onChange={e=>this.setState({password:e.target.value})} value={EditUsr.password}/>
           </Form.Item>

           <Form.Item label="Phone No." name="phone" rules={[{ required: true, message: 'Please input your name!' }]}>
             <Input onChange={e=>this.setState({phone:e.target.value})} value={EditUsr.phone}/>
           </Form.Item>

          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your name!' }]}>
             <Input onChange={e=>this.setState({username:e.target.value})} value={EditUsr.username}/>
           </Form.Item>

           <Form.Item label="Domain" name="domain" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({domain:e.target.value})} value={EditUsr.domain}/>
           </Form.Item>

           <Form.Item label="Bloodgroup" name="bloodgroup" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input onChange={e=>this.setState({bloodgroup:e.target.value})} value={EditUsr.bloodgroup}/>
          </Form.Item>
          {/* Add more form fields as needed */}
         </Form>
       </Modal>
    </div>
        {/* <Button onClick={UserData} variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> */}

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>


    <div style={{width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Button style={{fontSize:'15px',fontWeight:'700'}} type="primary" onClick={showModal}>
        Add new details
    </Button>
    </div>
    </>)
  }
}
export default withStyles(styles)(Table);
