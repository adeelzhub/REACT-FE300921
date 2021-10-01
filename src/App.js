import React, {useState} from 'react';
import './App.css';
import { fetchRequest } from './utils';

const App = ()=> {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  const submitHandler = (e) =>{
    e.preventDefault();
    fetchRequest(username, email, password, setUser);

    
    // call fetch request for creating user
  };

  return (
  <div className="App"> 
    <form onSubmit={submitHandler}>
      <input placeholder="Username" onChange={(e) =>setUsername(e.target.value)}/>
      <input placeholder="Email" onChange = {(e) => setEmail(e.target.value)}/>
      <input placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/>
    <button type="submit">Submit</button>
    </form>
    {user?<h1>{user.user.email}</h1>:<h1>NO User</h1>}
    <h1>{user? ` Hello ${user.user.username}` : "No User"}</h1>
    
  </div>
  )
};

export default App;
