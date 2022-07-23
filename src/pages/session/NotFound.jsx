import React, {Component} from "react";
import GDSEButton from "../../components/common/button";
import {withStyles} from "@mui/styles";
import error from "../../assets/img/error.png"
import {Link} from "react-router-dom";

const styleSheet = () => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    image_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "10px"
    }
})

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.image_container}>
                    <img src={error} alt=""/>
                </div>

                <Link to="/">
                    <GDSEButton
                        variant="outlined"
                        label="Back To Home Page"
                    />
                </Link>
            </div>
        )
    }
}

export default withStyles(styleSheet)(NotFound)