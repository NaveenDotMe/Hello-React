import React, {Component} from "react";
import Greeting from "../../components/homepage/greeting";

class HomePage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Greeting name="Naveen" />
        )
    }
}

export default HomePage;