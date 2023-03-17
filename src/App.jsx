import { useContext } from "react";
import { AppContext, AppProvider } from "./context/AppContext";
import Allocation from "./components/Allocation";
import BudgetSpend from "./components/BudgetSpend";
import AllocationInput from "./components/AllocationInput";

function App() {
  return (
    <div className='App'>
      <div className='container-lg px-3'>
        <h1>Budget Alocation App</h1>
        <AppProvider>
          <BudgetSpend />
          <h2>Allocation</h2>
          <Allocation />
          <h2>Change Allocation</h2>
          <AllocationInput />
        </AppProvider>
      </div>
    </div>
  );
}

export default App;
