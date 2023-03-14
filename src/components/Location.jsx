import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Location = () => {
  const { currency, dispatch } = useContext(AppContext);

  const [selectCurr, setSelectCurr] = useState(currency);

  useEffect(() => {
    dispatch({
      type: "CC_LOCATION",
      payload: selectCurr,
    });
  }, [selectCurr]);

  return (
    <>
      <span className='input-group-text'>Currency: </span>
      <select
        onChange={(e) => setSelectCurr(e.target.value)}
        defaultValue={selectCurr}
        className='form-select'>
        <option value='$'>($ Dollar)</option>
        <option value='£'>(£ Pound)</option>
        <option value='€'>(€ Euro)</option>
        <option value='₹'>(₹ Ruppee)</option>
      </select>
    </>
  );
};

export default Location;
