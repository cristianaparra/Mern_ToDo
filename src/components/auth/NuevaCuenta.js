import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autentificacion/authContext'


const NuevaCuenta = () => {

    //extarer valores del conext
    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlerta } = alertaContext;

// context de autentificiacion
    const authContext = useContext(AuthContext)
    const { registrarUsuario } = authContext;

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });
    const { nombre, email, password, confirmar } = usuario;


    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    //cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // validar que no haya campos vacios
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('todos los campos son obligatios', 'alerta-error');
            return;
        }
        // password minimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta('el password debe tener al menos 6 caracteres', 'alerta-error')
            return;
        }
        //validar 2 paswword son iguales
        if (password !== confirmar) {
            mostrarAlerta('los password tiene que ser iguales', 'alerta-error')
            return;
        }
        //pasarlo al caction
        registrarUsuario({
            nombre,
            email,
            password
        });
    }

    return (
        <div className='form-usuario'>
            {alerta ? (<div className={`alerta ${alerta.categoria} `}>{alerta.msg}</div>) : null}
            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una Cuenta</h1>
                <form
                    onSubmit={onSubmit}>
                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Tu Nombre'
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='nombre'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu Password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar Password</label>
                        <input
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repite tu Password'
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input type='submit' className='btn btn-primario btn-block' value='Registrarme' />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;
