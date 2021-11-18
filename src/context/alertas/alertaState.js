import React, { useReducer } from "react";
import alertaReducer from "./alertaReducer";
import alertaContext from "./alertaContext";

import { 
    MOSTRAR_ALERTA,
    OCULATAR_ALERTA,
 } from '../../types';

const AlertaState = props => {

    const initialState = {
        alerta: null
    }

    const [state, dispatch] = useReducer(alertaReducer, initialState);

    // Agregar las funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        // Despues de 5 segundos limpia la alerta
        setTimeout(() => {
            dispatch({
                type: OCULATAR_ALERTA
            })
        }, 5000);
    }

    return (
        <alertaContext.Provider 
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;

