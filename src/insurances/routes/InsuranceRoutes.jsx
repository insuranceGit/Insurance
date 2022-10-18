import { Routes, Route, Navigate } from "react-router-dom"
import { InsurancePage } from "../pages/InsurancePage"


export const InsuranceRoutes = () => {
  return (
    <Routes>
        <Route path = "/"  element={ < InsurancePage /> }/>

        {/* Cualquier otra ruta */}
        <Route path = "/*"  element={ < Navigate to= "/" /> }/>

    </Routes>
  )
}
