import styled from "styled-components";
import background from "../background.jpg"

export const Main = styled.main`
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    margin-top: -60px;
    max-width: 100%;
    height: 400px;
`;
