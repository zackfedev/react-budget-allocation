import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Location = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrency = (location) => {
    dispatch({
      type: "CC_LOCATION",
      payload: location,
    });
  };

  return (
    <>
      <span className='input-group-text bg-success text-white'>Currency: </span>
      <select
        placeholder='Currency'
        onChange={(e) => handleCurrency(e.target.value)}
        defaultValue={currency}
        className='form-select bg-success text-white'>
        <option value='$'>$ Dollar</option>
        <option value='£'>£ Pound</option>
        <option value='€'>€ Euro</option>
        <option value='₹'>₹ Ruppee</option>
      </select>
    </>
  );
};

export default Location;
