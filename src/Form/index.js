import { useState } from "react";
import "./style.css"

const Form = () => {
  const [currency, setCurrency] = useState("")
  const [convertCurrency, setConvertCurrency] = useState("")
  const [a, b] = useState(0)
  const onFormSubmit = (event) => {
    event.preventDefault();
  };
  const getCurrency = () => {
    b(() => currency / convertCurrency)
  }

  return (
    <form onSubmit={onFormSubmit} className="form">

      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency converter</legend>
        <p>
          <label className="form__label"> I have: PLN
            <input value={currency} onChange={(event) => setCurrency(event.target.value)} className="form__number" type="number" step="any" />
          </label>
        </p>
        <p>
          <label className="form__label"> I want:
            <select value={convertCurrency} onChange={(event) => setConvertCurrency(event.target.value)}  className="form__select js-currency">
              <option value="4.5622">EUR</option>
              <option value="3.7736">USD</option>
              <option value="5.2474">GBP</option>
              <option value="4.1282">CHF</option>
            </select>
            <p>
              {/* <input value={a} onChange={(event) => b(event.target.value)} className="form__number" type="number" min="0" step="0.01" /> */}
              {a.toFixed(2)}
              <button onClick={getCurrency}>Convert</button>
            </p>

          </label>
        </p>
      </fieldset>
    </form >
  )
}
export default Form;