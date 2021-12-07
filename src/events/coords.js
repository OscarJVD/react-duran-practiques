import React, { Component } from 'react';

class Coordinates extends Component {

    constructor() {
        super();
        this.state = { mouseX: 0, mouseY: 0 }
    }

    getCoord = (e) => { // Contexto de obj window
        const { clientX, clientY } = e;
        this.setState({
            mouseX: clientX,
            mouseY: clientY
        })
    }

    render() {
        return (
            <div
                onMouseMove={this.getCoord}
                style={{ border: '1px solid salmon', marginTop: 10, padding: 10 }}
            >
                <h3>Evento onMouseMove actuando sobre el Obj Window alternado el estado</h3>
                <p>{this.state.mouseX}, {this.state.mouseY}</p>
            </div>
        );
    }
}

export default Coordinates;

