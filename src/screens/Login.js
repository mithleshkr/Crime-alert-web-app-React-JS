import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik,Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import './Dashboard.css'

const Login=({handleChange})=>{

    //const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'blue'}
    const btnstyle={margin:'8px 0'}
    const initialValues={
        username:"",
        password:"",
        remember:false
    }
    const validationSchema=Yup.object().shape({
        username:Yup.string().email('Please enter valid username').required("Required"),
        password:Yup.string().required("Required")
    })
    const onSubmit=(values,props)=>{
        props.resetForm()
        
        console.log(values)
        console.log(props)
    }
    return(
        <Grid >
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props)=>(
                            <Form>
                                
                    <Field as={TextField} 
                    helperText={<ErrorMessage name="username" style={{color:"red"}}/>}
                    label="Username"
                    name="username"
                    placeholder="Enter username"
                    // value={username}
                    // onChange={(e)=>setUsername(e.target.value)}
                    fullWidth 
                    required />
                    <Field as={TextField}
                    helperText={<ErrorMessage name="password"/>}
                    label="Password" 
                    name="password"
                    placeholder="Enter password" 
                    type="password" 
                    value={password}
            onChange={(e)=>setPassword(e.target.value)}
                    fullWidth 
                    required />
                    <Field as={FormControlLabel}
                    name="remember"
                    control={
                    <Checkbox
                    name="checkedB"
                    color="primary"
                     />
                    }
                    label="Remember me"
                    />
                    <Button 
                   onClick={()=>navigate('/dashboard')}
                    style={btnstyle}
                    type="submit"
                    color="primary"
                    variant="contained"
                    disabled={!password }
                    fullWidth>
                    LOGIN
                    </Button>
                            </Form>
                        )}
                    </Formik>
                <Typography >
                    
                </Typography>
                <Typography > New User ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Click here to signup
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login