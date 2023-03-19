import React, { useState, useContext, useCallback } from "react";
import { AppContext } from "../context/AppContext";

const AllocationInput = () => {
  const { currency, dispatch, budget, spended } = useContext(AppContext);

  const [actionIdentity, setIdentity] = useState({
    department: "",
    inputVal: "",
    types: null,
  });

  console.log(actionIdentity);

  const handleSubmit = () => {
    const convNum = parseInt(actionIdentity.inputVal);
    const remaining = budget - spended;

    const actionPayload = {
      nameDPT: actionIdentity.department,
      value: convNum,
    };

    if (convNum < remaining) {
      if (actionIdentity.types === "increase" && convNum < remaining) {
        dispatch({
          type: "ADD_ALLOCATION",
          payload: actionPayload,
        });
      } else {
        dispatch({
          type: "RED_ALLOCATION",
          payload: actionPayload,
        });
      }
    } else {
      alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
    }

    setIdentity({ ...actionIdentity, inputVal: "" });
  };

  return (
    <div className='d-flex gap-5'>
      <div className='input-group'>
        <span
          className='input-group-text'
          id='inputGroup-sizing-default'>
          Department
        </span>
        <select
          onChange={(e) => setIdentity({ ...actionIdentity, department: e.target.value })}
          defaultValue=''
          className='form-select'>
          <option value=''>Choose . . . </option>
          <option value='Marketing'>Marketing</option>
          <option value='Finance'>Finance</option>
          <option value='Sales'>Sales</option>
          <option value='Human Resources'>Human Resources</option>
          <option value='IT'>IT</option>
        </select>
      </div>
      <div className='input-group'>
        <span
          className='input-group-text'
          id='inputGroup-sizing-default'>
          Action
        </span>
        <select
          className='form-select'
          onChange={(e) => setIdentity({ ...actionIdentity, types: e.target.value })}>
          <option>Choose Action . . . </option>
          <option value='increase'>Add</option>
          <option value='decrease'>Reduce</option>
        </select>
      </div>
      <div className='input-group'>
        <span
          className='input-group-text'
          id='inputGroup-sizing-small'>
          {currency}
        </span>
        <input
          value={actionIdentity.inputVal}
          onChange={(e) => setIdentity({ ...actionIdentity, inputVal: e.target.value })}
          className='form-control'
          type='number'
        />
        <button
          className='input-group-text btn btn-primary'
          id='inputGroup-sizing-default'
          onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AllocationInput;
