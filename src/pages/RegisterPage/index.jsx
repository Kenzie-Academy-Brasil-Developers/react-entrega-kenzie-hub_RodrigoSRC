import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"
import { StyledContainer } from "./style"

export const RegisterPage = () => {
    return(
        <StyledContainer>
            <div className="formBox">
                <div className="navBar">
                    <img src="/src/assets/Logo.png" alt="Logo" />

                    <Link to="/">Voltar</Link>
                </div>

                <RegisterForm/>
            </div>

        </StyledContainer>
    )
}