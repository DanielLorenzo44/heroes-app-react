import { Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <> 
        <Routes>
            <Route path="login/*" element={
              <PublicRoute>
                {/* <LoginPage/> Es lo mismo que las etiquetas <Routes></Routes> de la linea siguiente*/}
                <Routes>
                  <Route path="/*" element={<LoginPage/>}/>
                </Routes>
              </PublicRoute>
            } />
            {/* <Route path="login" element={<LoginPage/>}/> */}

            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            } />
             {/* <Route path="/*" element={<HeroesRoutes/>}/> */}
        </Routes>
    </>
  )
}
