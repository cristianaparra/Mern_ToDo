import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { FORMULARIO_PROYECTO } from '../../types';

const ProyectoState = props => {

    const initialState = {
        proyectos: [
            { id: 1, nombre: 'Tienda Virtual' },
            { id: 2, nombre: 'Intranet' },
            { id: 3, nombre: 'Diseño de Sitio web' }
        ],
        formulario: false
    }

    //dispatch o envia para ejecutar la accion
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // serie de funciones crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })

    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
            }}>
            {props.children}
        </proyectoContext.Provider>
    )
}
export default ProyectoState;