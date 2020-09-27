
import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';



import {
    TAREAS_PROYECTO,
    AGREGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../types/index'


const TareaState = props => {


    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 3 },
            { id: 7, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 1 },
            { id: 8, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
        ],
        tareasproyecto: null,
        errortarea: false
    }

    // create dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState)

    //crear las funciones

    //obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREAS,
            payload: tarea
        })
    }
    //valida y muestra erro cuando sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //eliminar tareas por id]
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea
            }}>
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;