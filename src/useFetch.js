import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [error, setError]= useState(null)
    const [datas, setDatas] = useState(null);
    const [isPending, setIsPending] = useState(true);


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
        console.log(data);
        setDatas(data);
        setIsPending(false);
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