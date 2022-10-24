import { Routes, Route, Navigate } from "react-router-dom"
import { InsurancePage } from "../pages/InsurancePage"
import { UsersPage } from "../pages/UsersPage"
import { HistoryPage } from "../pages/HistoryPage"
import { LoadPage } from "../pages/LoadPage"
import { FormPage } from "../pages/FormPage"


export const InsuranceRoutes = () => {
  return (
    <Routes>
        <Route path = "/"  element={ < InsurancePage /> }/>

        <Route path = "/users"  element={ < UsersPage /> }/>

        <Route path = "/history"  element={ < HistoryPage /> }/>

        <Route path = "/load"  element={ < LoadPage /> }/>

        <Route path = "/form"  element={ < FormPage /> }/>


        {/* Cualquier otra ruta */}
        <Route path = "/*"  element={ < Navigate to= "/" /> }/>

    </Routes>
  )
}
