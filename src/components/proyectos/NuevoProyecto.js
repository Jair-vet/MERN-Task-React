import React, {Fragment, useState} from 'react'

const NuevoProyecto = () => {

    // State para el Proyecto
    const [proyecto, guardarproyecto] = useState({
        nombre: ''
    });

    const onChangeProyecto = e => {
         guardarproyecto({
             // Clonamos el proyecto
             ...proyecto,
             // le asignamos el nuevo valor
             [e.target.name] : e.target.value
         })
    }



    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"

            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    
                   
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