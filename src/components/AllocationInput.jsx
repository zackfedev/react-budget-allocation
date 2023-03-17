import React, { useState, useContext, useCallback } from "react";
import { AppContext } from "../context/AppContext";

const AllocationInput = () => {
  const { currency, dispatch, budget, spended } = useContext(AppContext);

  const [department, setDepartment] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [types, setTypes] = useState("");

  const handleSubmit = () => {
    const payObj = {
      nameDPT: department,
      value: parseInt(inputValue),
    };

    if (types === "increase" && +inputValue <= +budget - spended) {
      dispatch({ type: "ADD_ALLOCATION", payload: payObj });
    } else if (types === "decrease") {
      dispatch({ type: "RED_ALLOCATION", payload: payObj });
    } else if (inputValue === "" || department === "") {
      alert("Set Option First");
    } else {
      alert("canceled Value exceeds budget");
    }

    setInputValue("");
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
          onChange={(e) => setDepartment(e.target.value)}
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
          onChange={(e) => setTypes(e.target.value)}>
          <option value=''>Choose Action . . . </option>
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='form-control'
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
