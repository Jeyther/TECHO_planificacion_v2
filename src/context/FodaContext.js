import React, { createContext, useState } from 'react';

const FodaContext = createContext();

const FodaContextProvider = ({ children }) => {

  const [form, setForm] = useState([]);

  const updateCache = (array) => {
    const fodaJson = JSON.stringify(array)
    if (array.length !== 0) { localStorage.setItem("FODA", fodaJson) }
  }

  updateCache(form);

  const handleChange = (e) => {
    // console.log(e.target.value)
  };

  const takeFodaToContext = () => {

    updateCache(form)
  }

  const cargarFodaDeLocalStorage = () => {

    let storageFoda = JSON.parse(localStorage.getItem("FODA"));
    console.log(storageFoda);
    if (localStorage.getItem("FODA") !== null) { setForm(storageFoda) };
  }

  const data = { handleChange, cargarFodaDeLocalStorage, takeFodaToContext, form, setForm, }

  return (
    <FodaContext.Provider value={data}>
      {children}
    </FodaContext.Provider>
  )
}

export { FodaContextProvider };
//exporto contexto
export default FodaContext;


