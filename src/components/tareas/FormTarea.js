import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {
    //extraer un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas,
        actualizarTarea, limpiarTarea } = tareasContext;

    //effect que deteca si hjay una tarea seleccionada
    useEffect(() => {
        if (tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada)
        } else {
            guardarTarea({
                nombre: ''
            })
        }

    }, [tareaseleccionada])

    //state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    // extraer el nombre del proyecto
    const { nombre } = tarea;

    //validacion de proyecto, si no hay proyecto sellecionado
    if (!proyecto) return null;

    // array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;


    //leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()

        // validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }

        //si es edicion o es nueva tarea
        if (tareaseleccionada == null) {
            //tarea nueva
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {

            //actualizart tarea existente
            actualizarTarea(tarea);

            //elimina tarea seleccionada del state
            limpiarTarea()
        }


        //pasar la validaciomn
        obtenerTareas(proyectoActual.id)

        //reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }
    return (

        <div className='formulario'>
            <form
                onSubmit={onSubmit}>
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='NombreTarea...'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}

                    />
                </div>
            </form>
            {errortarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}

export default FormTarea;