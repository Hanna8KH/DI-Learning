import React from "react";

export class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: "red" };

    };
    changeColor = () => {this.setState({favoriteColor: "blue"})}
    render() {
        return <>
            <header>My favorite color is {this.state.favoriteColor}</header>
            <button onClick={ this.changeColor }>Change color to blue</button>
        </>
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: "yellow"})
        }, 5000)
    }
}