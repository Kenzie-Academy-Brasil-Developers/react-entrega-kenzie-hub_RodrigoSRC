import { StyledTitle, StyledParagraph } from "../../styles/typography"
import { StyledContainer } from "./style"
import { Link } from "react-router-dom";

export const HomePage = ({user}) => {

    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
    }

    return(

        <StyledContainer>
            <div className="formBox">

                <div className="navBar">
                    <img src="/src/assets/Logo.png" alt="Logo" />
                    <Link onClick={() => {userLogout()}} to="/">Sair</Link>
                </div>


                <section className="headerSection">
                    <header>
                            <StyledTitle>{user.name}</StyledTitle>
                            <StyledParagraph>{user.course_module}</StyledParagraph>
                    </header>
                </section>


                <main>
                        <StyledTitle>Que pena! Estamos em desenvolvimento :(</StyledTitle>
                        
                        <StyledParagraph>Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledParagraph>
                </main>

            </div>
        </StyledContainer>
    )
}