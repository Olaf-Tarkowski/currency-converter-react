import styled from "styled-components";

export const StyledHeader = styled.header`
    font-size: 30px;
    margin-bottom: 50px;
    text-align: center;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
        font-size: 17px; 
    }
`;

export const Title = styled.h1`
    padding-top: 150px;
    text-shadow: 2px 2px ${({theme}) => theme.colors.gray};
    color: ${({theme}) => theme.colors.waikawaGray};
`;

export const Paragraph = styled.p`
    margin-top: 70px;
    text-shadow: 1px 1px ${({theme}) => theme.colors.gray};
    color: ${({theme}) => theme.colors.waikawaGray};
`;