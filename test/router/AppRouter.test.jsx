import { render, screen } from "@testing-library/react"
import { AppRouter } from "../../src/router/AppRouter"
import { AuthContext } from "../../src/auth"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en AppRouter', () => { 
    test('Debe de mostrar el login si no esta autenticado', () => { 
        
        const contextValue = {
            logged: false
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        //screen.debug();
        expect(screen.getAllByText('Login').length).toBe(2);
    });

    test('Debe de mostrar el componente de Marvel si esta autenticado', () => { 
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Dani'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
        //screen.debug();
    })
})