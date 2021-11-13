import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,  
} from '../../types';


export default (state, action) => {
    switch (action.type) {

        case FORMULARIO_PROYECTO:
            return{
                // Copia del State actual
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload,
            }
            case AGREGAR_PROYECTO:
                return{
                    ...state,
                    proyectos: [...state.proyectos, action.payload],
                    // Regresamos el Formulario(false) para que no se muestre
                    formulario: false,
                    // Reseteamos el Agregar Proyecto
                    errorformulario: false,
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorformulario: true,

            }
        
        case PROYECTO_ACTUAL:
            return{
                ...state,
                // Crea un nuevo Arreglo que se llama proyecto y mete el valor seleccionado
                proyecto: state.proyectos.filter( proyecto => proyecto.id === action.payload )
            }

        default:
            return state;
    }
}