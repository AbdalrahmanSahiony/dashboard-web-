import { useContext, useEffect, useState } from "react";
import "../../../index.css";
import "./SignUp.css"
import "../../../style.css";
import axios from "axios";
import { User } from "../Context/UserContext";
import Header from "../../../Components/Header";
import { useNavigate } from "react-router-dom";

export default function SignUp(props) {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [passwordre, setPasswordre] = useState("");
  const [accpet,setAccpet]=useState(false);
  const [emailerr,setEmailerr]=useState(false);
  const [errmsg,setErrMsg]=useState("");
  

const usernow = useContext(User);
const nav=useNavigate();


  async function  submit(e) {
    
    e.preventDefault();
    setAccpet(true);
    if(name === "" || password.length<8 || passwordre!==password){
      
    }else 
    try{
    
       let res = await axios.post(`http://127.0.0.1:8000/api/register`,{
        name: name,
        email:email,
        password:password,
        password_confirmation:passwordre
      });
      
        console.log(emailerr)
      const token = res.data.data.token;
      const userdetails = res.data.data.user;
      console.log(token,userdetails)
      await usernow.setAuth(token,userdetails);
      setErrMsg(res.data.message)
      nav("/Dashboard") 
    
}catch(err){
  if (err.response && err.response.status === 422) {
    setEmailerr(true);
    setErrMsg(err.response.data.message);
  }
    setAccpet(true)
    console.log(err)
}

    
  }
  
  return (
    <div className="parent">
   <Header/>
    <div>
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {name === ""&&accpet&&<p className="error">UserName is required</p>}       
        
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailerr===true && <p className="error">{errmsg}</p>}
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e => setPassword(e.target.value))}
        />
        {password.length<8 && accpet &&(<p className="error" style={{margin:0}}>password must be more 8char</p>) }
        <label htmlFor="repeat">Repeat Password</label>
        <input
          id="repeat"
          type="password"
          placeholder="Repeat password"
          value={passwordre}
          onChange={(e) => setPasswordre(e.target.value)}
        />
        {passwordre!==password&&accpet&&<p className="error">password dont match</p> }
        <div style={{ textAlign: "center" }}>
          <button type="submit"  >Redddgister</button>
        </div>
      </form>
    </div>
    </div>
  );
}
