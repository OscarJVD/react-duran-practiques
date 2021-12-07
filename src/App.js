import './App.css';
import React, { Component } from 'react';
// import TernaryConditional from './sections/conditional';
import ArrayMapKey from './sections/conditional';
import EveCom from './events/alert';
import SinteticEvent from './events/sinteticEvent';
import Coordinates from './events/coords';
import FormSimple from './events/forms';
import Box from './sections/children';
import ArticleBox from './sections/article';

// import {ConditionalSection} from './sections/conditional';
// TRES COMPONETES SENCILLOS
// function Hello(props){
// return <h2>Holaaa Reactiva {props.test}</h2>
// }

// const Hello = props => <h5>{props.test}</h5>

// class Hello extends Component{
//   render(){
//   return <h2>Holaaa soy el titulo del componente {this.props.test}</h2>
//   }
// }

// Porbando el paso de valores por props
class TestingProps extends Component {
  render() {
    const {
      age,
      bomb,
      multiply,
      name,
      matrix,
      yesOrNo,
      fTitle
    } = this.props;

    const boolean = yesOrNo ? 'Claro que si' : 'No, NO, NOOOOO';
    const recorredMatrix = matrix.map(multiply);
    return (
      <div>
        <h3>Hola mi nombre es {name}, tengo {age} años</h3>
        <p>Verdad? {JSON.stringify(yesOrNo)}</p>
        <small>{boolean}</small>
        <h5>{recorredMatrix.join(', ')}</h5>
        <h2>Mi bombaa {bomb.name}</h2>
        {fTitle}
      </div>
    );
  }
}

class PropsDefault extends Component {
  render() {
    return (
      <div>
        <h3>Prop por defecto = {this.props.great}</h3>
      </div>
    );
  }
}

PropsDefault.defaultProps = {
  great: "Hola Mundo de React"
}

// GESTIÓN DEL ESTADO EN REACT
// PROPAGANDO EL ESTADO A OTRO COMPONENTE -> CHILD
class StatusRe extends Component {
  constructor() {
    super()
    this.state = {
      contador: 1
    }

    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000);
  }

  render() {
    return (
      <Child contador={this.state.contador} />
    );
  }
}

// Pasar estado como prop
class Child extends Component {
  render() {
    return (
      <h2>{this.props.contador}</h2>
    );
  }
}

// Forma nueva de JS  para usar el estado
class TC39_JS extends Component {
  state = {
    happy: ":D"
  }

  render() {
    return <h2>{this.state.happy}</h2>
  }
}

// Inicializar el estado pasando como prop
class InitStateProp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.props.time
    }

    setInterval(() => {
      // this.state.time = this.state.time + 1; // FORMA ERRONEA
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  render() {
    return (
      <strong>{this.state.time}</strong>
    );
  }
}

InitStateProp.defaultProps = {
  time: 0
}

function App() {

  return (
    <div>
      <TestingProps
        age={17}
        name="Oscar"
        yesOrNo={true}
        matrix={[1, 23, 4, 45, 6]}
        multiply={n => n * 5}
        bomb={{ name: "Oscar", age: 17 }}
        fTitle={<h1>Este es un titulo en una prop</h1>}
      />
      <PropsDefault great="Sustituida" />
      <TC39_JS />
      <StatusRe />
      <InitStateProp time={200} />
      {/* <ConditionalSection /> */}
      {/* <TernaryConditional /> */}
      <ArrayMapKey />
      <EveCom />
      <SinteticEvent />
      <Coordinates />
      <FormSimple />
      <Box>
        Hola Soy Children!
        <h3>Eaaaaaa yeahhh</h3>
      </Box>
      <Box>Hola Soy otro berraco Children!</Box>
      <ArticleBox
        author="Oscar"
        date={new Date().toLocaleDateString()}
        title="Artículo sobre la prop children"
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, architecto!</p>
        <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nesciunt possimus ut.</strong>
      </ArticleBox>
    </div>
  );
}

export default App;
