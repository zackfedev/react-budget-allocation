import { useReducer, createContext } from "react";

export const AppReducer = (state, action) => {
  const state_updt = [];
  switch (action.type) {
    case "ADD_ALLOCATION":
      state.allocation.map((item) => {
        if (item.nameDPT === action.nameDPT) item.quantity = item.quantity + action.payload;
        state_updt.push(item);
      });
      state.allocation = state_updt;
      return {
        ...state,
      };
    case "RED_ALLOCATION":
      state.allocation.map((item) => {
        if (item.nameDPT === action.nameDPT) item.quantity = item.quantity - action.payload;
        state_updt.push(item);
      });
      state.allocation = state_updt;
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
    { id: "Human Resource", nameDPT: "Marketing", quantity: 0 },
    { id: "IT", nameDPT: "IT", quantity: 0 },
  ],
  currency: "$",
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        currency: state.currency,
        dispatch,
        allocation: state.allocation,
      }}>
      {children}
    </AppContext.Provider>
  );
};
