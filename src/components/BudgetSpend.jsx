import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Location from "./Location";

const BudgetSpend = () => {
  const { currency, allocation } = useContext(AppContext);

  const [budget, setBudget] = useState(0);
  const [spent] = useState(
    allocation.reduce((result, { quantity }) => {
      return result + quantity;
    }, 0)
  );
  const [remaining] = useState(
    allocation.reduce((result) => {
      return result + budget - spent;
    }, 0)
  );

  return (
    <div className='row gap-3 '>
      <div className='col alert alert-secondary input-group'>
        <span
          className='input-group-text'
          id='inputGroup-sizing-default'>
          Budget {currency}
        </span>
        <input
          type='number'
          className='form-control'
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      <div
        className='col alert alert-success d-flex'
        style={{ alignItems: "center" }}>
        <h6>
          Remaining: {currency} {budget - spent}
        </h6>
      </div>
      <div
        className='col alert alert-primary d-flex'
        style={{ alignItems: "center" }}>
        <h6>
          Spent So Far: {currency} {spent}
        </h6>
      </div>
      <div className='col alert alert-secondary input-group'>
        <Location />
      </div>
    </div>
  );
};

export default BudgetSpend;
