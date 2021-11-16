import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTO:
            return{
                ...state,
                // Agregamos las tareas con ese id
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas: [action.payload, ...state.tareas],
                errortarea: false
            }
        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea: true,

            }

        default: return state;
    }
}