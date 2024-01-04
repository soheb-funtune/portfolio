import React, { createContext, useReducer } from "react";
import { theme } from "../theme";

export const ThemeContext = createContext();

const initialValue = {
  val: 0,
  theme: { ...theme?.dark }, // You might want to initialize this properly
  mode: "light",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "dark":
      return { ...state, theme: { ...theme.dark }, mode: "dark" };
    case "light":
      return { ...state, theme: { ...theme.light }, mode: "light" };
    default:
      return state;
  }
};

const ContextWrapp = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialValue);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {/* Children components can access the theme context */}
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ContextWrapp;
