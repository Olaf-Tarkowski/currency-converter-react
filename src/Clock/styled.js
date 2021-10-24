import styled from "styled-components"

export const StyledClock = styled.p`
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    margin-right: 19px;
    padding-top: 300px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        padding-top: 100px;
    }
`;