import React, { Component } from 'react';
import cars from '../data/cars.json'

// class Login extends Component {
//     render() {
//         return (
//             <div>
//                 <button>Iniciar Sesión</button>
//             </div>
//         );
//     }
// }

// class Logout extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Bienvenido Usuario</p>
//                 <button>Cerrar Sesión</button>
//             </div>
//         );
//     }
// }

// // class ConditionalSection extends Component {
// //     constructor() {
// //         super();
// //         this.state = { mostrarA: true }
// //     }

// //     useConditionalRendering(mostrarA) {
// //         if (mostrarA) return <ComponenteA />
// //         return <ComponenteB />
// //     }

// //     render() {
// //         return (
// //             <div>
// //                 <h4>Renderizado Condicional</h4>
// //                 {this.useConditionalRendering(this.state.mostrarA)}
// //             </div>
// //         );
// //     }
// // }

// // class TernaryConditional extends Component {
// //     constructor() {
// //         super();
// //         this.state = { isLogged: false }
// //     }

// //     render() {
// //         const condition = this.state.isLogged
// //             ? <Login />
// //             : <Logout />
// //         return (
// //             <div>
// //                 <h4>Renderizado Condicional ternario:</h4>
// //                 {condition}
// //             </div>
// //         );
// //     }
// // }

class CarItem extends Component {
    render() {
        const { car, id } = this.props
        return (
            <li>
                <p>Key {id}</p>
                <p><strong>Nombre: </strong>{car.name}</p>
                <p><strong>Marca:  </strong>{car.company}</p>
            </li>
        );
    }
}

class ArrayMapKey extends Component {

    render() {
        const list = [1, 2, 2, 3, 4, 5]
        return (
            <div>
                <h4>Renderizado de arreglos y listas</h4>
                {list.map((num, index) => {
                    return <p key={index}>Soy el número: {num}</p>
                })}
                <hr />
                <h4>Listas de Objetos</h4>
                <ul>
                    {
                        cars.map(car => {
                            return <CarItem car={car} id={car.id} key={car.id}/>
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default ArrayMapKey;

