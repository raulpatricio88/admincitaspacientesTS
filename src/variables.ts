import { generarId } from "./funciones"
import type { Cita } from './types'

let editando = {
    value: false
}

// Objeto de Cita
const citaObj : Cita = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}

// Primitive types
//let precio : number | boolean | string //para decirle que sea de un tipo u otro

// let precio : number
// let producto : string
// let disponible : boolean
//Para objetos se ocupan types o interfaces

// type Producto = {
//     precio: number;
//     producto: string;
//     disponible: boolean;

// }

// const producto : Producto = {
//     precio: 50,
//     producto: "Monitor 34 pulgadas",
//     disponible: false
// }

// console.log(producto.disponible)

// precio = 50
// producto = "Monitor 34 pulgadas"
// disponible = false