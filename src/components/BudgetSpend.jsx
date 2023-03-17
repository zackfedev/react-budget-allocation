import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Location from "./Location";

const BudgetSpend = () => {
  const { currency, spended, budget, dispatch } = useContext(AppContext);

  const handleBudgets = (e) => {
    const inputValue = e.target.value;
    const max_budgets = 20000;

    if (+budget < max_budgets) {
      dispatch({
        type: "SET_BUDGET",
        payload: inputValue,
      });
    } else {
      alert(`The value cannot exceed remaining funds ${currency}${budget - spended}`);
    }
  };

  return (
    <div className='row gap-3'>
      <div className='col alert alert-secondary input-group'>
        <span
          className='input-group-text'
          id='inputGroup-sizing-default'>
          Budget {currency}
        </span>
        <input
          type='number'
          className='form-control'
          value={budget}
          onChange={handleBudgets}
        />
      </div>
      <div
        className='col-xl-3 col-md-12 alert alert-success d-flex'
        style={{ alignItems: "center" }}>
        <h6>
          Remaining: {currency} {parseInt(budget) !== "" ? budget - spended : 0}
        </h6>
      </div>
      <div
        className='col-xl-3 col-sm-4  alert alert-primary d-flex'
        style={{ alignItems: "center" }}>
        <h6>
          Spent So Far: {currency} {spended}
        </h6>
      </div>
      <div className='col alert alert-secondary input-group text-white'>
        <Location />
      </div>
    </div>
  );
};

export default BudgetSpend;
