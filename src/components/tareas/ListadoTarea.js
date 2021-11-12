import React, {Fragment} from 'react'
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        { nomre: 'Elegir Plataforma', estado: true},
        { nomre: 'Elegir Colores', estado: false},
        { nomre: 'Elegir Plataforma de Pago', estado: false},
        { nomre: 'Elegir Hosting', estado: true},
    ]


    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

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
        </Fragment>
     );
}
 
export default ListadoTareas;