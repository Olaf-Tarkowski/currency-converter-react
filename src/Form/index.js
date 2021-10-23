import { useEffect, useState } from "react";
import { FormSetup, Fieldset, Legend, Label, StyledButton, Input } from "./styled"


const base_url = "https://api.exchangerate.host/latest?base=PLN"
const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(base_url);
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const { rates, date } = await response.json();
        setRatesData({ state: "success", rates, date });

      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(fetchApi, 2_000);
  }, []);
  return ratesData;
};


export const Form = () => {
  const ratesData = useRatesData();
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState("EUR")
  const [result, setResult] = useState(0)


  const getCurrency = () => {
    const rate = ratesData.rates[currency];
    setResult(() => amount * rate)
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <FormSetup onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>
          Currency converter
        </Legend>
        {ratesData.state === "loading"
          ? (
            <p>
              Loading currencies from the European Central Bank.
            </p>
          )
          : (ratesData.state === "error"
            ? (
              <p>
                Sorry... something went wrong... check internet.
              </p>
            ) : (
              <>
                <p>
                  <Label>
                    I have: PLN
                  </Label>
                </p>
                <p>
                  <Label>
                    <Input value={amount} onChange={({ target }) => setAmount(target.value)} required type="number" min="0" step="0.01" />
                  </Label>
                </p>
                <p>
                  <Label> I want:
                    <Input as="select" value={currency} onChange={({ target }) => setCurrency(target.value)}>
                      {Object.keys(ratesData.rates).map(((currency) => (
                        <option
                          key={currency}
                          value={currency}
                        >
                          {currency}
                        </option>
                      )))}
                    </Input>
                  </Label>
                </p>
                <p>
                  <Label>
                    <Input value={result.toFixed(2)} onChange={({ target }) => setResult(target.value)} disabled={true} type="number" />
                  </Label>
                </p>
                <StyledButton onClick={getCurrency}>
                  Convert
                </StyledButton>
                <p>
                  Exchange rates are taken from the European Central Bank. <br/>
                  Valid as of the date: {ratesData.date}
                </p>
              </>))}
      </Fieldset>
    </FormSetup >
  )
}
export default Form;