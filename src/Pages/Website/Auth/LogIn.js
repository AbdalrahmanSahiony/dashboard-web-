import { useContext, useEffect, useState } from "react";
import "../../../index.css";
import "./SignUp.css"
import "../../../style.css";
import axios from "axios";
import { User } from "../Context/UserContext";
import Header from "../../../Components/Header";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function LogIn() {

  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [err,setErr]=useState();
  const [ErrMsg,setErrMsg]=useState();
  const [accpet,setAccpet]=useState(false);
  
  
  

const usernow = useContext(User);
const nav=useNavigate();


  async function  submit(e) {
    
    e.preventDefault();
   
    
    try{
    
       let res = await axios.post(`http://127.0.0.1:8000/api/login`,{
        
        email:email,
        password:password,
        
      });
      
        
      const token = res.data.data.token;
      const userdetails = res.data.data.user;
     
      console.log(token,userdetails)
      await usernow.setAuth(token,userdetails);
      
      nav("/Dashboard") 
    
}catch(err){
  if (err.response && err.response.status === 401) {
    setErr(true);
    setErrMsg(err.response.data.message);
  }
    
    console.log(err)
}

    
  }
  
  return (
    <div className="parent">
   <Header/>
    <div>
      <form onSubmit={submit}>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e => setPassword(e.target.value))}
        />
        {/*password.length<8 && accpet &&(<p className="error" style={{margin:0}}>password must be more 8char</p>) **/}
        
        <div style={{ textAlign: "center" }}>
          <button type="submit"  >login</button>
        </div>
        {err===true && <p className="error">Wrong Email or password</p>}
      </form>
    </div>
    </div>
  );
}
