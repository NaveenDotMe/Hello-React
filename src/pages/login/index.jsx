import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import GDSEButton from "../../components/common/button";

class Login extends Component {
    constructor(props) {
        super(props);
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
                        <TextField id="outlined-basic" label="User Name" variant="outlined"/>
                        <TextField id="outlined-basic" type="password" label="Passward" variant="outlined"/>
                    </div>
                    <div className={classes.button_container}>
                        <GDSEButton
                            label="Login"
                                    variant="contained"
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default withStyles(styleSheet)(Login)