import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages/test";


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="Login"  element={<LoginPage/>}/>
        <Route path="Register"  element={<RegisterPage/>}/>

        {/* Cuando se quiera acceder a una pagina diferente al login */}
        <Route path="/*"  element={<Navigate to = "/auth/login"/>}/>
    </Routes>
  )
}
