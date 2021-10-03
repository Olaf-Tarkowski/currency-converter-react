import { useState } from "react";
import { currencies } from "./currencies";
import { FormSetup, Fieldset, Legend, Label, Select, StyledButton, Input } from "./styled"



const Form = () => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState(currencies.find((cur) => cur.name === "EUR").value)
  const [convertCurrency, setConvertCurrency] = useState(0)

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const getCurrency = () => {
    if (amount >= 0) {
      setConvertCurrency(() => amount / currency)
    }
  };

  return (
    <FormSetup onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>
          Currency converter
        </Legend>
        <p>
          <Label>
            I have: PLN
          </Label>
        </p>
        <p>
          <Label>
            <Input value={amount} onChange={({ target }) => setAmount(target.value)} type="number" min="0" step="0.01" />
          </Label>
        </p>
        <p>
          <Label> I want:
            <Select value={currency} onChange={({ target }) => setCurrency(target.value)}>
              {currencies.map((cur) => (
                <option key={cur.value} value={cur.value}>
                  {cur.name}
                </option>
              ))}
            </Select>
          </Label>
        </p>
        <p>
          <Label>
            <Input value={convertCurrency.toFixed(2)} onChange={({ target }) => setConvertCurrency(target.value)} disabled={true} type="number" />
          </Label>
        </p>
        <StyledButton onClick={getCurrency}>
          Convert
        </StyledButton>
      </Fieldset>
    </FormSetup >
  )
}
export default Form;