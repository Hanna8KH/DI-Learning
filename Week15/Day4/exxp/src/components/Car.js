import React from "react";
import { Garage } from "./Garage";
const carinfo = {name: "Ford", model: "Mustang"};


export class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {color : "red"}

    }
    render() {
        return (
        <>
          <h1>This car is {carinfo.model}</h1>
          <h1>This car color is {this.state.color}</h1>
          <Garage size="small"/>
        </>
    )
  }
}