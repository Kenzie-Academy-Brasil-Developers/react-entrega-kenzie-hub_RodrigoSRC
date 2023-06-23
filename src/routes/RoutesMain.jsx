import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"

export const RoutesMain = ({setUser, user}) => {

    return(
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser}/>}/>
            <Route path="/home" element={<HomePage user={user}/>}/>
            <Route path="/register" element={<RegisterPage />}/>
        </Routes>
    )
}