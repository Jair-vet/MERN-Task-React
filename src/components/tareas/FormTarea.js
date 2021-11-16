import React, { useContext, useState } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // Extraer si un proyecto esta Activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener la función del context de la tarea
    const tareasContext = useContext(tareaContext);
    const {agregarTarea} = tareasContext

    // State del formulario
    const [ tarea, guardarTarea ] = useState({
        nombre: '',
    });

    // Extraer el nombre del proyecto
    const { nombre } = tarea;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    // Desestructuracion de Arreglo para extraer el proyecto actual
    const [proyectoAtual] = proyecto;

    // Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }


    const onSubmit = e => {
        e.preventDefault();

        // Validar el formulario

        // Pasar la validacion

        // Agregar la tarea la nueva tarea al state de tareas
        tarea.proyectoId = proyectoAtual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        // Reiniciar el formulario
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div> 
     );
}
 
export default FormTarea;