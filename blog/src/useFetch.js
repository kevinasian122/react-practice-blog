import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { //useEffect fires here only when dom renders at the start, the code inside is json code
        fetch(url)
          .then(res => {
            if(!res.ok){ //the res object has a 'ok' property, so if no data fetched, ok is false
                throw Error('could not fetch data'); //creates error to be caught in .catch(err)
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch(err => { //catch catches any error and fires a function when it does
            setError(err.message);
            setIsPending(false);
          })
      }, [url])

      return {data, isPending, error}; //returns the 3 properties
}

export default useFetch;
