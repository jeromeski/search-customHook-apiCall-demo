import axios from 'axios';
import { useEffect } from 'react';


export const useGetUsers = async (url, setUsers) => {

  useEffect(() => {
    axios.get(url).then(
      (res) => setUsers(res.data))
  },[url, setUsers])
  
}