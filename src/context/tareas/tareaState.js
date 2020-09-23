
import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
    const initialState = {
        tareas: [],
    }

    // create dispatch y state
    const [state, dispatch] = useReducer(TareaReducer)

    return (
        <TareaContext.Provider>
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;