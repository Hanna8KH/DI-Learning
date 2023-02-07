import React from "react";

// const changeColor = () => {this.setState({ color: "blue"})}
 
export class Phone extends React.Component {
    changeColor = () => {this.setState({ color: "blue"})}
    constructor(props) {
        super(props);
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
        
    };

    render() {
        return <>
            <div>My phone is {this.state.brand}</div>
            <div>It is a {this.state.color} {this.state.model} of {this.state.year}</div>
            <button onClick={this.changeColor}>Change Color</button>
        </>
    }

}