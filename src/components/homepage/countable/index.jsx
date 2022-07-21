import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

class Countable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increaseCount() {
        console.log("Increase Function Calling")
        this.setState({
            count: this.state.count + 1
        })
    }

    decreaseCount() {
        console.log("Decrease Function Calling")
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <Typography variant="h4" component="div" gutterBottom>
                    Count : {this.state.count}
                </Typography>
                <Button variant="contained"
                        onClick={() => {
                            console.log("Clicked")
                            this.increaseCount()
                        }}>Increase</Button>

                <Button variant="contained"
                        onClick={() => {
                            console.log("Clicked")
                            this.decreaseCount()
                        }}>Decrease</Button>
            </div>
        )
    }
}

export default Countable