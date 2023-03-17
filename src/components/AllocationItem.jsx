import { FaTimesCircle } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const AllocationItem = ({ currency, department, quantity }) => {
  const { dispatch, budget, spended } = useContext(AppContext);

  const payObj = {
    nameDPT: department,
    value: 10,
  };

  const increaseTen = () => {
    if (+budget !== spended) {
      dispatch({
        type: "ADD_ALLOCATION",
        payload: payObj,
      });
    } else {
      alert("Declined! Budget out of spended! or You must set budget first!");
    }
  };

  return (
    <tr>
      <th scope='row'>{department}</th>
      <td>
        {currency} {quantity}
      </td>
      <td>
        <AiFillPlusCircle
          className='click-animation'
          size='1.8rem'
          color='green'
          onClick={increaseTen}
        />
      </td>
      <td>
        <span>
          <AiFillMinusCircle
            className='click-animation'
            size='1.8rem'
            color='red'
            onClick={() =>
              dispatch({
                type: "RED_ALLOCATION",
                payload: payObj,
              })
            }
          />
        </span>
      </td>
      <td>
        <span>
          <FaTimesCircle
            className='click-animation times'
            size='1.8rem'
            color='black'
            onClick={() =>
              dispatch({
                type: "DELETE",
                payload: {
                  nameDPT: department,
                },
              })
            }
          />
        </span>
      </td>
    </tr>
  );
};

export default AllocationItem;
