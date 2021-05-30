import { useState } from "react";
import { useGetUsers } from "./api";
import "./styles.css";


function LocalSearch({input, setInput}) {
 
 const handleOnChange = (e) => {
  e.preventDefault();
  setInput(e.target.value)
 }

 return(
   <div>
     <label>Search </label>
     <input
      placeholder='Enter search'
      type='search'
      value={input}
      onChange={handleOnChange}
     />
   </div>
 )
}

export default function App() {
  const [input, setInput] = useState('')
  const [users, setUsers] = useState([])
  useGetUsers('https://jsonplaceholder.typicode.com/users', setUsers)
  
  const searched = (input) => (user) => user.name.includes(input)

  return (
    <div className="App">
      <LocalSearch 
        input={input}
        setInput={setInput}
      />
      {users.filter(searched(input)).map(user => <h3 key={user.id}>{user.name}</h3>)}
    </div>
  );
}
