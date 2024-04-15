import React, { createContext, useState } from "react";
export const DataGlobalContext = createContext();

const GlobalContext = ({ children }) => {
  const [dataUser, setDataUser] = useState(null);
  const [emailRegister, setEmailRegister] = useState(null);
  const [products, setProducts] = useState([]);
  let data = {
    dataUser,
    setDataUser,
    emailRegister,
    setEmailRegister,
    products,
    setProducts,
  };
  return (
    <DataGlobalContext.Provider value={data}>
      {children}
    </DataGlobalContext.Provider>
  );
};

export default GlobalContext;
