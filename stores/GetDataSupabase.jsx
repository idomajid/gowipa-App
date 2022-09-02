import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
import AppLoading from "expo-app-loading";

export const AffiliateContext = React.createContext(null);

export default function GetDataSupabase({ children }) {
  const [dataFromSupabase, setDataFromSupabase] = useState(null);

  async function productFetch() {
    try {
      let { data, error } = await supabase.from("products").select();
      setDataFromSupabase(data);
    } catch (err) {
      console.log({ err });
    }
  }

  useEffect(() => {
    productFetch();
  }, []);

  // useEffect(()=> {
  //   async function fetchData() {
  //     const newText = await callAffiliateApi();
  //     setData(newText)
  //   };fetchData()
  // },[])
  console.log("Data in the context", dataFromSupabase);

  if (dataFromSupabase != null) {
    return (
      <AffiliateContext.Provider value={dataFromSupabase}>
        {children}
      </AffiliateContext.Provider>
    );
  }
  return (
    <AffiliateContext.Provider value={AppLoading}>
      {children}
    </AffiliateContext.Provider>
  );
}
