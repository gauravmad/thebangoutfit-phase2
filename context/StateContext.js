import React,{ createContext, useContext, useState, useEffect} from 'react';
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext=({children})=> {
  const [searchTerm, setSearchTerm] = useState("");

  const [cartItems, setCartItems]= useState([]);
  const [totalPrice, setTotalPrice]= useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty]= useState(1);


  const incQty=()=>{
    setQty((prevQty)=>prevQty+1);
  }

  const decQty=()=>{
    setQty((prevQty)=>{
      if(prevQty-1<1) return;
      return prevQty-1 ;
    });
  }


  const value={
    searchTerm,
    setSearchTerm,
    qty,
    setQty,
    incQty,
    decQty
  }
  
  return(
  
  <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )

}

export const useStateContext = ()=> useContext(Context)