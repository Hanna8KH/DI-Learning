import React from "react";


const clickMe = () => alert("I was clicked")
const handleKeyPress = (e) => {
    if (e.key != "Enter") return;
    const message = "The Enter key was pressed, your input is: " + e.target.value;
    alert(message)
}

export class Event extends React.Component {
    toggleButton = () => {
        this.setState({ isToggledOn: !this.state.isToggledOn });
    }
    constructor(props) {
        super(props);
        this.state = { isToggledOn : true };

    }
    render() {
        const buttonMessage = this.state.isToggledOn ? 'ON' : 'OFF';
        return (
            <>
                <h1>Event Component</h1>
                <button onClick={clickMe}>Click Me</button>
                <input type="text" onKeyDown={handleKeyPress}/>
                <br/>
                <button onClick={this.toggleButton}>{buttonMessage}</button>
            </>
        )
        } 
}