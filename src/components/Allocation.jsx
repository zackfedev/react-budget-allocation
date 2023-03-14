import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AllocationItem from "./AllocationItem";

const Allocation = () => {
  const { allocation, currency } = useContext(AppContext);
  console.log(allocation);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Department</th>
          <th scope='col'>Allocation Budget</th>
          <th scope='col'>Increase by 10</th>
          <th scope='col'>Decrease by 10</th>
          <th scope='col'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {allocation.map(({ id, nameDPT, quantity }) => (
          <AllocationItem
            key={id}
            currency={currency}
            department={nameDPT}
            quantity={quantity}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Allocation;
