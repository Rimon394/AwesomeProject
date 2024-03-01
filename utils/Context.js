import React, { createContext, useState } from "react";

// Create the context
const FitnessItemsContext = createContext();

// Create the context provider
const FitnessContextProvider = ({ children }) => {
  // Define state variables
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // Provide the context value to its children
  return (
    <FitnessItemsContext.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
      }}
    >
      {children}
    </FitnessItemsContext.Provider>
  );
};

export { FitnessContextProvider, FitnessItemsContext };
