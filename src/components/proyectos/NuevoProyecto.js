import React, {Fragment, useState} from 'react'

const NuevoProyecto = () => {

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

        
        // Agregar al State


        // Reiniciar el form
    }


    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"

            >Nuevo Proyecto</button>

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
        </Fragment>
        
     );
}
 
export default NuevoProyecto;