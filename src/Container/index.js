import styled from "styled-components";
import background from "../background.jpg"

export const Container = styled.main`
    font-family: 'Josefin Slab', serif, cursive;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    margin-top: -60px;
    max-width: 100%;
    height: 400px;
`;


export default Container;