import React, { createContext, useState } from "react";
const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  const updateToken = (newData) => {
    setToken(newData);
    localStorage.setItem("token", JSON.stringify(newData));
  };

  return (
    <MyContext.Provider
      value={{
        token,
        updateToken,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
