import axios from 'axios';
import { useEffect } from 'react';


export const useGetUsers = async (url, setUsers) => {

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url)
      setUsers(res.data)
    }
    fetchData()
    
  },[url, setUsers])
  
}