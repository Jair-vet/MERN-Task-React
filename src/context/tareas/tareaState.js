import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import  { v4 as uuidv4 } from 'uuid';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA,
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: false, proyectoId: 1 },
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 5, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 6, nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 4 },
            { id: 7, nombre: 'Elegir Hosting', estado: true, proyectoId: 1 },
            { id: 8, nombre: 'Elegir Colores', estado: false, proyectoId: 3 },
            { id: 9, nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 2 },
            { id: 10, nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 11, nombre: 'Elegir Colores', estado: true, proyectoId: 3 },
            { id: 12, nombre: 'Elegir Plataforma de Pago', estado: false, proyectoId: 2 },
            { id: 13, nombre: 'Elegir Hosting', estado: true, proyectoId: 1 },
            { id: 14, nombre: 'Elegir Jugar', estado: true, proyectoId: 1 },
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null,
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


    // Agregar Tarea al Proyecto
    const agregarTarea = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    }

    // VALIDA y muestra un error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        });
    }

    // Eliminar Tarea Por Id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        });
    }


    // Cambiar el estado de las tareas
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        });
    }

    // Extrae una tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    // Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    }

    // Elimina una tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA,
        });
    }


    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;