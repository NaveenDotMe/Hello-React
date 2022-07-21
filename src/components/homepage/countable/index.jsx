import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

class Countable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Typography variant="h4" component="div" gutterBottom>
                    Count : 0
                </Typography>
                <Button variant="contained"
                        onClick={() =>{
                            console.log("Clicked")
                        }}>Increase</Button>
            </div>
        )
    }
}

export default Countable