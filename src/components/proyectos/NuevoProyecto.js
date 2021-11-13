import React, {Fragment, useState, useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el State del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } 
            = proyectosContext;


    // State para el Proyecto
    const [proyecto, guardarproyecto] = useState({
        nombre: ''
    });

    // Extraer nombre de proyecto
    const {nombre} = proyecto;

    // Leemos los contenidos del input 
    const onChangeProyecto = e => {
         guardarproyecto({
             // Clonamos el proyecto
             ...proyecto,
             // le asignamos el nuevo valor
             [e.target.name] : e.target.value
         })
    }

    // Cuando el usuario envia el Proyecto
    const onSubmitProyecto = e => {
        // Para que no se ejecute por defecto
        e.preventDefault();

        // Validar el proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }

        
        // Agregar al State
        agregarProyecto(proyecto);
        
        // Reiniciar el form
        guardarproyecto({
            nombre: ''
        })

    }


    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario() }
            >Nuevo Proyecto</button>

            {
                formulario
                ? 
                    (
                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyecto}
                        >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyecto}
                            
                            />

                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />

                        </form>
                    )
                : null
            }
        {errorformulario ? <p className="mensaje error">El nombre del Proyecto es Obligatorio</p> : null }
        </Fragment>
        
     );
}
 
export default NuevoProyecto;