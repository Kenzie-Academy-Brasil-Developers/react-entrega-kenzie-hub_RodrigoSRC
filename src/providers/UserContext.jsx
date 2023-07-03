import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";


export const UserContext = createContext({})


export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)


    const currentPath = window.location.pathname

    
    const userLogin = async (formData) => {
        try{
            const {data} = await api.post('/sessions', formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);

            setUser(data.user);
            console.log("Login efetuado");
            console.log(data.user);

            navigate("/home");
        } catch(error) {
            console.log(error);
        } 
    }

    const navigate = useNavigate();

    const userRegister = async (formData) => {
        try {
            await api.post('/users', formData);
            console.log("Cadastro efetuado com sucesso")

            setTimeout(() => {navigate("/")} , 3000);
        } catch(error) {
            console.log(error)
        }
    }

    const userLogout = () => {
        setUser(null)
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        console.log("ueee")
    }


    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")

        const userLoad = async () => {
            try {
                setLoading(true);
                const {data} = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigate(currentPath)
            } catch (error) {
                console.log(error)
                localStorage.removeItem("@TOKEN")
            }
            finally {
                setLoading(false);
            }
        }
        if (token) {
            userLoad()
        }

    }, [])


    return(
        <UserContext.Provider value={{ user, setUser, userRegister, userLogin, userLogout, loading, setLoading }}>
            {children}
        </UserContext.Provider>
    )
}
