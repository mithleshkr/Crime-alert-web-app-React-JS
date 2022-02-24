import React,{useState} from 'react'
import { Grid , Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';


function Signup()  {


    const [uname, setUname] = useState("");
    const [uemail, setUemail] = useState("");
    const [upassword, setUpassword] = useState("");
    const [uage, setUage] = useState("");
    const [uphone, setUphone] = useState("");
    const [ucity, setUcity] = useState("");
    const [ucountry, setUcountry] = useState("");

    function save (){
        console.warn({uname, uemail, upassword, uage, uphone, ucity, ucountry});
        let data = {uname, uemail, upassword, uage, uphone, ucity, ucountry}
        fetch("http://localhost:3333/user",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
     }).then((result)=>{
         console.warn("result",result);
        

     })
  }

    const paperstyle={padding:20, width:300, margin:'0 auto'}
    const headerstyle={margin:0}
    const avatarstyle={backgroundColor:'blue'}

    const nameChangeHandler = (e) => {

        if (e.target.value.match(/[a-z]/i) || e.target.value === '') {
    
          setUname(e.target.value);
         
    
        }
        }
    

    return (
        
        <Grid>
            <Paper  style={paperstyle}>
                <Grid align="center">
                    <Avatar style={avatarstyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                
                <h2 style={headerstyle}>Sign Up</h2>
                <Typography variant='caption'>Please fill this form to create an account</Typography>
                </Grid>
                <form style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
                    <TextField fullWidth value={uname} onChange={(e)=>{nameChangeHandler(e)}} label="Name" placeholder="Enter your name" type="text" required/>
                    <TextField fullWidth value={uemail} onChange={(e)=>{setUemail(e.target.value)}} label="Email" placeholder="Enter your email" type="email" required />
                    <TextField fullWidth value={upassword} onChange={(e)=>{setUpassword(e.target.value)}} label="Password" placeholder="Enter your password" type="password" required/>
                    <TextField fullWidth value={uage} onChange={(e)=>{setUage(e.target.value)}} label="Age" placeholder="Enter your age" type="number" required/>
                    <TextField fullWidth value={uphone} onChange={(e)=>{setUphone(e.target.value)}} label="Phone" placeholder="Enter your phone number" type="number" required/>
                    <TextField fullWidth value={ucity} onChange={(e)=>{setUcity(e.target.value)}} label="City" placeholder="Enter your city" type="text" required/>
                    <TextField fullWidth value={ucountry} onChange={(e)=>{setUcountry(e.target.value)}} label="Country" placeholder="Enter your Country" type="text" required /> 
                    
                    <br/>
                    <Button disabled={!uname + !uemail + !upassword + !uage + !uphone + !ucity +!ucountry} type="submit" variant="contained" color="primary" onClick={save} >
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Grid>
        
    )
}

export default Signup
