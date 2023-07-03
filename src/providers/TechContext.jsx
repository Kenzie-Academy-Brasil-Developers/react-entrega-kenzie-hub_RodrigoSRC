import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { UserContext } from "./UserContext";


export const TechContext = createContext({})


export const TechProvider = ({children}) => {
    const [techList, setTechList] = useState([])

    const { user } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        // const token = localStorage.getItem("@TOKEN");

        // const loadTechs = async () => {
        //     try {
        //         const { data } = await api.get("/profile"
        //         , {
        //             headers: {
        //                 Authorization: `Bearer ${token}`
        //             }
        //         })
        //         setTechList(data.techs)
        //         console.log(techList)
        //     } catch (error) {
        //         console.log(error)
        //         localStorage.removeItem("@TOKEN")
        //     }
        // }

        // if (token) {
        //     loadTechs()
        // }
    }, [])


    const createTech = async (formData) => {
        try {
            
          const { data } = await api.post("/users/techs", {
            headers: {
                Authorization: `Bearer ${token}`,
             },
          })
          setTechList((techList) => [...techList, data])      
            
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTech = async (techId) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            await api.post(`/users/works/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                 },
            })

            setTechList((techList) => techList.filter((tech) => tech.id !== techId))
        } catch (error) {
            console.log(error)
        }
    }


    const editTech = async (formData, techId) => {
        try {
            const token = localStorage.getItem("@TOKEN");

            const { data } = await api.put(`/users/techs/${techId}`)

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <TechContext.Provider value={{ }}>
           {children}
        </TechContext.Provider>
     );
}