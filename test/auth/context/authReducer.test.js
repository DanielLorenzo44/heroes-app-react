import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => { 

    test('Debe de retornar el estado por defecto', () => {
        const initialState = authReducer({logged: false}, {});
        expect(initialState).toEqual({logged: false});
    });

    test('Debe de llamar a login, autenticar y establecer el user', () => { 
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Daniel'
            }
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })

    });

    test('Debe de llamar a logout, borrar el nombre de usuario y logged en false', () => { 
        const initialState = {
            logged: true,
            user: {
                id: '123',
                name: 'Juan'
            }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(initialState, action);
        expect(newState).toEqual({logged: false});
    });
})