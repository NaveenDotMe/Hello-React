import {Component} from "react";

class HomePage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>Whats Up {this.props.name} But he is {this.props.status}</h2>
            </div>
        )
    }
}

export default HomePage;