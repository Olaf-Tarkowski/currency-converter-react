import styled from "styled-components";

export const FormSetup = styled.form`
    font-family: 'Josefin Slab', serif;
    text-align: center;
    margin: 20px auto;
    width: 100%;
    max-width: 400px;
`;

export const Fieldset = styled.fieldset`
    border-radius: 20px;
`;

export const Legend = styled.legend`
    font-weight: 700;
    font-size: 20px;
`;

export const Label = styled.label`
    font-weight: 700;
`;

export const Select = styled.select`
    text-shadow: 1px 1px rgb(0, 0, 0);
    font-weight: 700;
    color: rgb(255, 0, 0);
    background-color: rgb(180, 180, 180);
    border-radius: 5px;
`;

export const Input = styled.input`
    border-radius: 5px;
    text-align: center;
    box-shadow: black;
    
    &:disabled {
        background-color: rgb(255, 255, 255);
        color: black;
        border: white;
        border-radius: 5px;
    }
`;

export const StyledButton = styled.button`
    text-shadow: 1px 1px black;
    font-weight: 700;
    color: rgb(0, 185, 31);
    background-color: rgb(180, 180, 180);
    border-radius: 5px;
`;