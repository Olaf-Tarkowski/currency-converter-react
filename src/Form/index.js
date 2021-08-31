import { useEffect, useState } from "react";
import "./style.css"
import currencies from "./currencies";


const Form = () => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState(currencies.find((cur) => cur.name === "EUR").value)
  const [convertCurrency, setConvertCurrency] = useState(0)


  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const getCurrency = () => {
    setConvertCurrency(() => amount / currency)
  };

  const [date, setDate] = useState();
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const dateTime = new Date();
      setDate(dateTime.toLocaleDateString(undefined, { weekday: "long", day: "long", day: "numeric", month: "long" }))
    });
    setInterval(() => {
      const time = new Date();
      setClock(time.toLocaleTimeString())
    });
  }, [date, clock]);

  return (
    <form onSubmit={onFormSubmit} className="form">

      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency converter</legend>
        <p className="form__clock">
          Dzisiaj jest {date} , {clock}
        </p>
        <p>
          <label className="form__label"> I have: PLN </label>
        </p>
        <p>
          <label className="form__label">
            <input value={amount} onChange={(event) => setAmount(event.target.value)} className="form__number" type="number" step="any" min="0" step="0.01" />
          </label>
        </p>
        <p>
          <label className="form__label"> I want:
            <select value={currency} onChange={(event) => setCurrency(event.target.value)} className="form__select">
              {currencies.map((cur) => (
                <option key={cur.value} value={cur.value}>
                  {cur.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <label>
            <input value={convertCurrency.toFixed(2)} onChange={(event) => setConvertCurrency(event.target.value)} disabled="true" className="form__number" type="number" />
          </label>
        </p>
        <button className="form__button" onClick={getCurrency}>Convert</button>
      </fieldset>
    </form >
  )
}
export default Form;