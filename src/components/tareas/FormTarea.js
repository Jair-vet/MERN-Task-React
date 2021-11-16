import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    // Extraer si un proyecto esta Activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    // Desestructuracion de Arreglo para extraer el proyecto actual
    //const [proyectoAtual] = proyecto;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
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