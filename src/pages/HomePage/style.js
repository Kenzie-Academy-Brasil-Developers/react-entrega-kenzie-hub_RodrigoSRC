import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 100%;

    background-color: var(--grey-4);
    color: var(--grey-0);

    .formBox{
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1.875rem;

        width: 90rem;

        margin: 0 auto;
    }

    .navBar{
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 70px;
        width: 100%;
    }

    .navBar > a {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 30px;
        width: 55px;

        background-color: var(--grey-3);
        color: var(--grey-0);

        border-radius: var(--border-radious);
    }

    .headerSection{
        display: flex;
        justify-content: center;

        width: 100vw;
        border-bottom: 1px solid var(--grey-1);
        border-top: 1px solid var(--grey-1);
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 110px;
        width: 90rem;
    }

    header > p {
        color: var(--grey-1);
    }

    main{
        display: flex;
        flex-direction: column;
        gap: 20px;

        width: 100%;
    }
`