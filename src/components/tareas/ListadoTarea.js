import React, {Fragment} from 'react'

const ListadoTareas = () => {

    const tareas = [
        { nomre: 'Elegir Plataforma', estado: true},
        { nomre: 'Elegir Colores', estado: false},
        { nomre: 'Elegir Plataforma de Pago', estado: false},
        { nomre: 'Elegir Hosting', estado: true},
    ]


    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

            <ul className="listado-tareas"></ul>
        </Fragment>
     );
}
 
export default ListadoTareas;