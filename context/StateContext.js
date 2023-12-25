import React,{ createContext, useContext, useState, useEffect} from 'react';
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext=({children})=> {
  const [searchTerm, setSearchTerm] = useState("");

  const value={
    searchTerm,
    setSearchTerm
  }
  
  return(
  
  <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )

}

export const useStateContext = ()=> useContext(Context)