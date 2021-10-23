import { useEffect, useState } from "react";
import { FormSetup, Fieldset, Legend, Label, StyledButton, Input } from "./styled"

const base_url = "https://api.exchangerate.host/latest?base=PLN"

const Form = () => {
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState()
  const [convertCurrency, setConvertCurrency] = useState(0)

  const [currencyOptions, setCurrencyOptions] = useState({});
  console.log(currency);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(base_url);
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const { rates } = await response.json();
        setCurrencyOptions(rates);


        console.log(rates)
      } catch (error) {
        console.error("Error")
      }
    };
    fetchApi();
  }, []);



  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const getCurrency = () => {
    if (amount >= 0) {
      setConvertCurrency(() => amount * currency)
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
            <Input as="select" value={currency} onChange={({ target }) => setCurrency(target.value)}>
              {Object.entries(currencyOptions).map((rate) => (
                <option key={rate[0]} value={rate[1]}>
                  {rate[0]}
                </option>
              ))}
            </Input>
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