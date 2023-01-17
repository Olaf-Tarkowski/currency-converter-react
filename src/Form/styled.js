import styled from "styled-components";

export const FormSetup = styled.form`
  font-family: "Josefin Slab", serif;
  font-weight: 700;
  letter-spacing: 0.82px;
  text-align: center;
  margin: 20px auto;
  width: 100%;
  max-width: 420px;
`;

export const Fieldset = styled.fieldset`
  border-radius: 20px;
`;

export const Legend = styled.legend`
  font-size: 22px;
`;

export const Label = styled.label``;

export const Select = styled.select`
  text-shadow: 1px 1px rgb(0, 0, 0);
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
  color: rgb(0, 185, 31);
  background-color: rgb(180, 180, 180);
  border-radius: 5px;
`;

export const Info = styled.div`
  padding-top: 25px;
  padding-bottom: 10px;
`;
