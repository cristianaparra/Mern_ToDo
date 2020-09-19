import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyectos = props => {
    // usando context
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    useEffect(()=>{
        obtenerProyectos()
    },[])
    
    //revisar si proyectos tiene contenido
    if (proyectos.length === 0) return null;
    

    return (
        <ul className='listado-proyecto'>
            {proyectos.map(proyecto =>
                (

                    <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
                )
            )}
        </ul>
    );
}

export default ListadoProyectos;