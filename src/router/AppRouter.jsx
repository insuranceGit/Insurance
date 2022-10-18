import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { InsuranceRoutes } from "../insurances/routes/InsuranceRoutes"

export const AppRouter = () => {
  return (
    <Routes>

        {/* Rutas para el login */}
        <Route path="/auth/*"  element={ <AuthRoutes/>} />

        {/* Rutas de la aplicación */}
        <Route path="/*"  element={ <InsuranceRoutes/>} />

    </Routes>
  )
}
