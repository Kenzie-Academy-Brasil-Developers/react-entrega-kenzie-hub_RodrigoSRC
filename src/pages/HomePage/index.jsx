import { StyledTitle, StyledParagraph } from "../../styles/typography"
import { StyledContainer } from "./style"
import { Link } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const HomePage = () => {

    const { user, userLogout } = useContext(UserContext)

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


                {user.techs.lenght === 0 ? <main>
                <StyledTitle>Que pena! Estamos em desenvolvimento :(</StyledTitle>
                        
                <StyledParagraph>Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledParagraph> 
                </main>: <main>
                    <p>ue</p>
                    
                    </main>}



            </div>
        </StyledContainer>
    )
}