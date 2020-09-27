import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListadoProyectos = props => {
    // usando context
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos()
        //eslint-disable-next-line
    }, [])

    //revisar si proyectos tiene contenido
    if (proyectos.length === 0) return <p>Crea un nuevo proyectro para comenzar</p>;


    return (
        <ul className='listado-proyecto'>
            <TransitionGroup>
                {proyectos.map(proyecto =>
                    (
                        <CSSTransition
                            key={proyecto.id}
                            timeout={300}
                            classNames='proyecto'
                        >
                            <Proyecto
                                proyecto={proyecto}
                            />
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;