import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Input } from "../RegisterForm/Input";
import { loginFormSchema } from "./loginFormSchema";
import styles from "./style.module.css";
import { StyledButton } from "../Button/Button";

import { StyledParagraph, StyledTitle } from "../../styles/typography";


export const LoginForm = ({setUser}) => {

    const { 
        register, 
        handleSubmit, 
        formState: {errors}  
    } = useForm({
        resolver: zodResolver(loginFormSchema)
    });

    const navigatete = useNavigate()

    const userLogin = async (formData) => {
        try{
            const {data} = await api.post('/sessions', formData);
            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", data.user.id)

            setUser(data.user)
            console.log("Login efetuado")

            navigatete("/home");
        } catch(error) {
            console.log(error)
        } 
    }

    const submit = (formData) => {
        userLogin(formData)
    }


    return(
        <form className={styles.container} onClick={handleSubmit(submit)} noValidate>
            <StyledTitle fontWeight="bold">Login</StyledTitle>

            <Input 
                title="Email" 
                type="email" 
                placeholder="Digite aqui seu email" 
                {...register("email")} 
                error={errors.email}/>

            <Input 
                title="Senha" 
                type="password" 
                placeholder="Digite aqui sua senha" 
                {...register("password")} 
                error={errors.password}/>

            <StyledButton tp="login" type="submit">Entrar</StyledButton>

            <StyledParagraph>Ainda não possui uma conta?</StyledParagraph>

            <Link to="/register">Cadastre-se</Link>

        </form>
    )
}