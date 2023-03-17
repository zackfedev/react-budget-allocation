import { useReducer, createContext } from "react";

export const AppReducer = (state, action) => {
  let state_updt = [];
  switch (action.type) {
    case "ADD_ALLOCATION":
      state.allocation.map((item) => {
        if (item.nameDPT === action.payload.nameDPT) item.quantity += action.payload.value;

        state_updt.push(item);
      });
      state.allocation = state_updt;
      action.type = "DONE";
      return {
        ...state,
      };
    case "RED_ALLOCATION":
      state.allocation.map((item) => {
        if (
          item.nameDPT === action.payload.nameDPT &&
          item.quantity !== 0 &&
          action.payload.value <= item.quantity
        ) {
          item.quantity -= action.payload.value;
        } else {
          item.quantity = 0;
        }
        state_updt.push(item);
      });
      state.allocation = state_updt;
      action.type = "DONE";
      return {
        ...state,
      };
    case "DELETE":
      state.allocation.map((item) => {
        if (item.nameDPT === action.payload.nameDPT) item.quantity = 0;

        state_updt.push(item);
      });
      state.allocation = state_updt;
      action.type = "DONE";
      return {
        ...state,
      };
    case "SET_BUDGET":
      if (parseInt(state.budget) === state.spended) {
        alert("You cannot reduce budget lower than spended");
      } else {
        state.budget = action.payload;
      }
      return {
        ...state,
      };
    case "CC_LOCATION":
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  allocation: [
    { id: "Department", nameDPT: "Marketing", quantity: 0 },
    { id: "Finance", nameDPT: "Finance", quantity: 0 },
    { id: "Sales", nameDPT: "Sales", quantity: 0 },
    { id: "Human Resource", nameDPT: "Human Resources", quantity: 0 },
    { id: "IT", nameDPT: "IT", quantity: 0 },
  ],
  currency: "$",
  budget: "",
  spended: "",
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const budgetSpend = state.allocation.reduce((currentSpend, item) => {
    return currentSpend + item.quantity;
  }, 0);

  state.spended = budgetSpend;

  return (
    <AppContext.Provider
      value={{
        currency: state.currency,
        dispatch,
        allocation: state.allocation,
        budget: state.budget,
        spended: state.spended,
      }}>
      {children}
    </AppContext.Provider>
  );
};
