import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTareas = () => {

    // Extraer proyectos de State Inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;

    // Desestructuracion de Arreglo para extraer el proyecto actual
    const [proyectoAtual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true},
        { nombre: 'Elegir Colores', estado: false},
        { nombre: 'Elegir Plataforma de Pago', estado: false},
        { nombre: 'Elegir Hosting', estado: true},
    ]


    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoAtual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0

                    ? (<li className="tarea"><p>No hay Tareas</p></li>)
                    :tareasProyecto.map(tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
                }
                
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;