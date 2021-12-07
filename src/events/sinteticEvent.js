import React, {Component} from 'react';

export default class SinteticEvent extends Component{

    handleClick(e){
        console.log(e);
        console.log(e.nativeEvent);
        alert("Click")
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click para evento moderno sintetico</button>
            </div>
        );
    }
}

