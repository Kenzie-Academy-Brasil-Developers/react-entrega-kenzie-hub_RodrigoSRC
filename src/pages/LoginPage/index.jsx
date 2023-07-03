
import { LoginForm } from "../../components/LoginForm"
import { StyledContainer } from "./style"

export const LoginPage = () => {
    return(
        <StyledContainer>
            <div className="formBox">
                <img src="/src/assets/Logo.png" alt="Logo" />

                <LoginForm/>
            </div>
        </StyledContainer>
    )
}