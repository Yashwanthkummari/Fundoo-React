import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import './signup.css';
import gmailImage from '../Images/Gmail.jpg';

const Register = () => {
    return (
        <div className="name">

            <div className="name1">
                <div className="T"><h1 className="H"><span className="f">F</span><span className="u">U</span><span className="n">N</span><span className="d">D</span><span className="O">O</span><span className="o">O</span></h1></div>

                <div className="cs">
                    <h2>create your FundooNotes App Account</h2>
                    <p >to continue to Gmail</p>
                </div>
                <div className="cname">
                    <TextField id="firstName" label="FirstName" variant="outlined" />

                    <TextField id="lastname" className="ln" label="LastName" variant="outlined" />
                </div>


                <div className="us">
                    <TextField id="username" label="Username" variant="outlined" />
                </div>
                <p className="cs">you can use letters,numbers&periods</p>

                <div className="signin">
                    <TextField id="password" label="Password" type="password" variant="outlined" />

                    <TextField id="confirm Password" className="sm" label="Confirm Password" type="password" variant="outlined" />
                </div>
                <p className="es">Use 8 or more characters with a mix of letters,numbers & symbols</p>
                <div className="center">
                  <a href="Login.js" className="center2" > Sign In Instead</a>
                    <Button className="center1" variant="Contained" type="Submit">Register</Button>

                </div>
                
            </div>
            {/* <img  className = "I" src={gmailImage} height='50%' alt="GmailImage"></img> */}
        </div>

    )
}
export default Register