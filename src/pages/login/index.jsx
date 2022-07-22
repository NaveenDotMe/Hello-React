import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import GDSEButton from "../../components/common/button";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "admin",
            password: "admin"
        }
    }

    checkValidity() {
        console.log("Clicked")
        console.log("User Name : " + this.state.username)
        console.log("Password : " + this.state.password)
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.base_container}>
                    <div className={classes.title_container}>
                        <Typography variant="h4" gutterBottom component="div">
                            Login
                        </Typography>
                    </div>
                    <div className={classes.form_container}>
                        <TextField
                            id="outlined-basic"
                            label="User Name"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            onChange={(e)=>{
                                console.log(e.target.value)
                            }}
                        />
                    </div>
                    <div className={classes.button_container}>
                        <GDSEButton
                            label="Login"
                            variant="contained"
                            onClick={() => {
                                this.checkValidity();
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default withStyles(styleSheet)(Login)