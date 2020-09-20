import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'

const FormTarea = () => {
    //extraer un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

       //validacion de proyecto, si no hay proyecto sellecionado
       if (!proyecto) return null;
       // array destructuring para extraer el proyecto actual
       const [proyectoActual] = proyecto;

    return (

        <div className='formulario'>
            <form>
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='NombreTarea...'
                        name='nombre'
                    />
                </div>
                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Agregar Tarea'
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarea;