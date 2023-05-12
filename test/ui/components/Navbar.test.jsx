import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en componente Navbar', () => { 

    const contextValue = {
        logged: true,
        user: {
            id: '123',
            name: 'Daniel'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre del usuario loggeado', () => { 
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText("Daniel")).toBeTruthy();
        //screen.debug();
    });

    test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => { 
        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {'replace': true});
        //screen.debug();
    });
})