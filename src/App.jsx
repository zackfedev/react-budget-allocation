import { useContext } from "react";
import { AppContext, AppProvider } from "./context/AppContext";
import Allocation from "./components/Allocation";
import BudgetSpend from "./components/BudgetSpend";

function App() {
  return (
    <div className='App'>
      <div className='px-5'>
        <h1>Budget Alocation App</h1>
        <AppProvider>
          <div className='container-fluid'>
            <BudgetSpend />
          </div>
          <h2>Allocation</h2>
          <div>
            <Allocation />
          </div>
        </AppProvider>
      </div>
    </div>
  );
}

export default App;
