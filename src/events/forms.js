import React, { Component } from 'react';

export default class FormSimple extends Component {

    constructor() {
        super();
        this.state = {
            inpName: 'Oscar',
            inpAge: -23,
            inpTerms: true
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        const name = this.inputName.value;
        const age = document.getElementById('age').value
        console.log(name, age);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const name = this.inputName.value;
        const age = document.getElementById('age').value
        console.log(name, age);
    }

    handleChange = (e) => {
        console.log(`HANDLECHANGE`);
        console.log(e.target.checked);
        this.setState({ inpTerms: e.target.checked })
    }

    render() {
        return (
            <div>
                <h4>FORMS</h4>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={this.state.inpName}
                        onChange={e => this.setState({inpName: e.target.value})}
                        ref={inputEle => this.inputName = inputEle}
                    />
                    <input
                    type="number"
                    id="age"
                    value={this.state.inpAge}
                    onChange={e => this.setState({ inpAge: e.target.value })}

                    />
                    <p>
                        <label htmlFor="">
                            <input
                                type="checkbox"
                                onChange={this.handleChange}
                                checked={this.state.inpTerms}
                            />Accept Terms
                    </label>
                    </p>
                    <button>Enviar</button>
                    {/* <button onClick={this.handleClick}>Enviar</button> */}
                </form>
            </div>
        );
    }
}

