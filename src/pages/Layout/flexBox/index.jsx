import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import Typography from "@mui/material/Typography";

class FlexBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title_container}>
                    <div className={classes.title}>
                        <Typography variant="h4" gutterBottom component="div">
                            Customer
                        </Typography>
                    </div>
                </div>
                <div className={classes.form_container}>
                    <div className={classes.left_form}></div>
                    <div className={classes.right_form}></div>
                </div>
                <div className={classes.button_container}></div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(FlexBox)