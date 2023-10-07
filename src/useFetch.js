import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [error, setError]= useState(null)
    const [isPending, setIsPending] = useState(true);
    const [datas, setDatas] = useState(null);


useEffect(() =>{
    setTimeout(() =>{
        fetch (url)
        .then(res => {
            if (!res.ok) {
                throw Error (' api not found')
            }
            return res.json();
    })
    .then(data => {
        setIsPending(false);
        setDatas(data);
        setError(null)
    })
    .catch (err =>{
        setIsPending(false)
      setError(err.message)
    })
    },1000);
   },[url]); 
   
       return {datas, isPending, error}

}
export default useFetch;