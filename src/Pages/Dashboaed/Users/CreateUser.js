import { useContext, useEffect, useState } from "react";
import "../../../index.css";
import axios from "axios";
import { User } from "../../Website/Context/UserContext";

export default function Form(props) {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [passwordre, setPasswordre] = useState("");
  const [accpet,setAccpet]=useState(false);
  const [emailerr,setEmailerr]=useState("");
  const [errmsg,setErrMsg]=useState("");


const usernow = useContext(User);

// console.log(usernow)

useEffect(() => {
    setName(props.name);
    setEmail(props.email);
},[props.name,props.email])

  // console.log(email);
  

  
  async function  submit(e) {
    
    e.preventDefault();
    setAccpet(true);
    if(name === "" || password.length<8 || passwordre!==password){
      
    }else 
    try{
    
       let res = await axios.post(`http://127.0.0.1:8000/api/user/create`,{
        name: name,
        email:email,
        password:password,
        password_confirmation:passwordre
      });if (res && res.status === 200) {
       //props.hasLocalstorge && window.localStorage.setItem("email",email);
         //window.location.pathname='/Dashboard/Users'
      }
      const token = res.data.data.token;
      const userdetails = res.data.data.user;
      console.log(token,userdetails)
      await usernow.setAuth(token,userdetails);
       
      // setTimeout(() => 
      //   console.log(usernow.auth),1000
      // )
      
      
    
}catch(err){
    console.log(err)
}

    
  }
  
  return (
    <div className="parent">
   
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

        {/*name === ""&&accpet&&<p className="error">UserName is required</p>*/}       
        
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/*emailerr===422 && <p className="error">{errmsg}</p>*/}
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e => setPassword(e.target.value))}
        />
        {/*password.length<8 && accpet &&(<p className="error" style={{margin:0}}>password must be more 8char</p>)*/ }
        <label htmlFor="repeat">Repeat Password</label>
        <input
          id="repeat"
          type="password"
          placeholder="Repeat password"
          value={passwordre}
          onChange={(e) => setPasswordre(e.target.value)}
        />
        {/**passwordre!==password&&accpet&&<p className="error">password dont match</p> */}
        <div style={{ textAlign: "center" }}>
          <button type="submit" onClick={submit} >create</button>
        </div>
      </form>
    </div>
    </div>
  );
}