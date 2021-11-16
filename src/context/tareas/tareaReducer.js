import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
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
                tareas: [action.payload, ...state.tareas]
            }

        default: return state;
    }
}