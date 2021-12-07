import React, { Component } from 'react';

export default class Box extends Component {
    render() {
        return (
            <div style={{ border: '1px solid #000', margin: '1px', padding: '3px'}}>
                {this.props.children}
            </div>
        );
    }
}


