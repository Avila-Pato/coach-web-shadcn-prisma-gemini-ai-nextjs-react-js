
import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => { // Ejecuta un callbackque se ejecuta cuando se llama (fn)- Por ejemplo, cb podría ser algo como () => fetch('https://api.com').

  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args); // Ejecuta el callback donde puede recibir cualquier argumento(...args) 
      setData(response); // Guarda el resultado
      setError(null); // limpia el error si todo salio bn
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  // Retorno del hooks (fn) la funcion que hay que llamar apra ejecutar la peticion
  return { data, loading, error, fn, setData };
};

export default useFetch;


