import { useState } from "react";
import "./style.css"


const Form = () => {
  const [price, setPrice] = useState("")
  const [currency, setCurrency] = useState("4.5622")
  const [convertCurrency, setConvertCurrency] = useState(0)

  const onFormSubmit = (event) => {
    event.preventDefault();
  };
  const getCurrency = () => {
    setConvertCurrency(() => price / currency)
  }

  return (
    <form onSubmit={onFormSubmit} className="form">

      <fieldset className="form__fieldset">

        <legend className="form__legend">Currency converter</legend>
        <p>
          <label className="form__label"> I have: PLN
            <input value={price} onChange={(event) => setPrice(event.target.value)} className="form__number" type="number" step="any" />
          </label>
        </p>
        <p>
          <label className="form__label"> I want:
            <select value={currency} onChange={(event) => setCurrency(event.target.value)} className="form__select">
              <option value="4.5622">EUR</option>
              <option value="3.7736">USD</option>
              <option value="5.2474">GBP</option>
              <option value="4.1282">CHF</option>
            </select>
            <input value={convertCurrency.toFixed(2)} onChange={(event) => setConvertCurrency(event.target.value)} className="form__number" type="number" min="0" step="0.01" />
            <button className="form__button" onClick={getCurrency}>Convert</button>
          </label>
        </p>
      </fieldset>
    </form >
  )
}
export default Form;