import React, {Component} from "react";
import Typography from "@mui/material/Typography";
import GDSEButton from "../../common/button";

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

    restCount() {
        console.log("Reset Function Calling")
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <Typography variant="h4" component="div" gutterBottom>
                    Count : {this.state.count}
                </Typography>
                {/*<Button variant="contained"
                        onClick={() => {
                            console.log("Clicked")
                            this.increaseCount()
                        }}>Increase
                </Button>

                <Button variant="outline"
                        onClick={() => {
                            console.log("Clicked")
                            this.decreaseCount()
                        }} style={{marginLeft: "15px"}}>Decrease
                </Button>

                <Button variant="contained" color = "error"
                        onClick={() => {
                            console.log("Clicked")
                            this.restCount()
                        }} style={{marginLeft: "15px"}}>Reset
                </Button>*/}
                <GDSEButton
                    label="Increase"
                    variant="contained"
                    onClick={() => {
                        console.log("Clicked")
                        this.increaseCount()
                    }}
                />
                <GDSEButton
                    label="Decrease"
                    variant="outline"
                    onClick={() => {
                        console.log("Clicked")
                        this.decreaseCount()
                    }}
                    style={{marginLeft: "15px"}}
                />
                <GDSEButton
                    label="Reset"
                    variant="contained"
                    color="error"
                    onClick={() => {
                        console.log("Clicked")
                        this.restCount()
                    }} style={{marginLeft: "15px"}}
                />
            </div>
        )
    }

}

export default Countable