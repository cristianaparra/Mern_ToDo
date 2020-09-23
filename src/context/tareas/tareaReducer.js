import {
    AGREGAR_TAREAS,
    TAREAS_PROYECTO
} from '../../types/index'



export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREAS:
            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            }

        default:
            return state;
    }
}