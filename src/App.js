import React, { useState } from 'react';
import './App.css';
import { LogOutButton } from './Code/style';
import LoginForm from './Code';
import Components from './Components';

function App() {

  const adminUser={
    email: "dilovar@gmail.com",
    password:"dilovar1997"
  }

  const [user, setUser] = useState({email:"",password:""});

  const [error, setError] = useState("");

  const Login =details=>{
    console.log(details);

    if(details.email==adminUser.email && details.password==adminUser.password){
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      })
    } else{
      console.log("Details do not match!");
      setError("try this code error again")
    }
  }

  const Logout =()=>{
    setUser({email:"",password:""});
  }

  return (
    <div>
      {(user.email !="") ? (
        <div className="welcome">
          <Components />
          {/* <h2> Welcome, <span>{user.name}</span></h2> */}
          <LogOutButton style={{ marginTop: "60px" }}onClick={Logout}>
                <div className="footer-icon"><i class="fas fa-sign-out-alt"></i></div>
            </LogOutButton>
        </div>
      ): (
        <LoginForm Login ={Login} error ={error}/>
      )}
    </div>
  );
}

export default App;
