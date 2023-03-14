import { FaTimesCircle } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const AllocationItem = ({ currency, department, quantity }) => {
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
        />
      </td>
      <td>
        <span>
          <AiFillMinusCircle
            className='click-animation'
            size='1.8rem'
            color='red'
          />
        </span>
      </td>
      <td>
        <span>
          <FaTimesCircle
            className='click-animation times'
            size='1.8rem'
            color='black'
          />
        </span>
      </td>
    </tr>
  );
};

export default AllocationItem;
