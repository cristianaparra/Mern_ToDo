import React, { useReducer } from 'react';
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import {
    REGISTRO_ERROR,
    REGISTRO_EXITOSO,
    OBTENER_USUARIO,
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    CERRAR_SESION
} from '../../types';


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, disptach] = useReducer(AuthReducer, initialState);

    //las funciones

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje
            }}>
            {props.children}
        </AuthContext.Provider >
    );
}

export default AuthState;