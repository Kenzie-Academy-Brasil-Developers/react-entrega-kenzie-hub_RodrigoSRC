import { forwardRef } from "react";
import { StyledParagraph } from "../../../styles/typography";

export const Select = forwardRef(({children, error, ...rest}, ref) => {
    return(
        <div>
            <StyledParagraph fontWeight="bold">Selecionar módulo</StyledParagraph>
            <select ref={ref} {...rest}>
                {children}
            </select>
            {error ? <p>{error.message}</p> : null}
        </div>
    )
})