import { useContext } from "react";
import { AppContext, AppProvider } from "./context/AppContext";
import Allocation from "./components/Allocation";
import BudgetSpend from "./components/BudgetSpend";
import AllocationInput from "./components/AllocationInput";

function App() {
  return (
    <div className='App'>
      <div className='container-lg px-3'>
        <AppProvider>
          <div className='d-flex flex-column gap-3'>
            <div className='d-flex flex-column gap-2 my-3'>
              <h1>Budget Alocation App</h1>
              <BudgetSpend />
            </div>
            <div>
              <h2>Allocation</h2>
              <Allocation />
            </div>
            <div>
              <h2>Change Allocation</h2>
              <AllocationInput />
            </div>
          </div>
        </AppProvider>
      </div>
    </div>
  );
}

export default App;
