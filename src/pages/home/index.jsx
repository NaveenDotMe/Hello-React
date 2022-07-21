import React, {Component, Fragment} from "react";
import Greeting from "../../components/homepage/greeting";
import Countable from "../../components/homepage/countable";
import Divider from "@mui/material/Divider";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Greeting name="Naveen"/>
                <Divider light/>
                <Countable/>
            </Fragment>
        )
    }
}

export default HomePage;