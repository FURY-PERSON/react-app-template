import ReqError from '@source/api/reqError';
import { useState } from 'react'; 

export default function useFetching<T>(callBack: Function, successCB?: Function): [(...args:any)=>Promise<T|undefined>, boolean, string]{
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState('');

  let fetchData = async function(...args:any):Promise<T|undefined> {
    try {
      setIsLoading(true);
      const response = await callBack(...args);
      successCB && successCB();
      return response || 'success';
    } catch(e) {
      if(e instanceof ReqError) {
        setError(e.message);
      } else {
        if(process.env.REACT_APP_MODE !== 'production') {
          alert("unhandled error");
        } else {
/*           new Notification().warning('Something went wrong'); */
        }
        console.warn(e)
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, isLoading, err];
}