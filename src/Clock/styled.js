import styled from "styled-components"

export const StyledClock = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    margin-right: 19px;
    padding-top: 380px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 621px) {
        padding-top: 289px;
    }
`;