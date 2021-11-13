import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    // Obtener el State del proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // Obtene la función del context de la tarea
    const tareasContext = useContext(tareaContext);
    const {obtenerTareas} = tareasContext


    // Función para agregar el proyecto Actual
    const seleccionarProyecto = id => {
        proyectoActual(id); // Fijar un proyecto Actual
        obtenerTareas(id); // Filtrar las tareas

    }


    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => seleccionarProyecto(proyecto.id) }
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;