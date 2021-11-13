import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaContext';

import {
     TAREAS_PROYECTO,
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 4 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 1 },
        ],
        tareasproyecto: null
    }

    // Crear el dispatch y el state
    const [state, dispatch] = useReducer(TareaReducer, initialState);


    // Crear las Funciones

    // Obtener las tareas de un Proyecto
    const obtenerTareas = proyectoId => {
        dispatch({ 
            type: TAREAS_PROYECTO,
            tareasproyecto: state.tareasproyecto,
            payload: proyectoId,
        });
    }



    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                obtenerTareas,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;