import { useContext, useEffect, useState } from "react";
import "../Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import UserProvider, { User } from "../../Website/Context/UserContext";
import Cookies from "universal-cookie";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [runUseEffect,setRun]=useState(0);

  
   // cookie
  //  const cookie = new Cookies();
  //  const tokenCookie = cookie.set("Bearer",token)
  //  const gettoken = cookie.get("Bearer")
const context = useContext(User)
  const token = context.auth

 useEffect(() =>{
   

 const res = axios.get("http://127.0.0.1:8000/api/user/show",{
    headers:{
      Accept:"application/json",
      Authorization:" Bearer "+ token
    }
  })
  .then((data) => setUsers(data.data)
)
console.log(token) 
console.log("cccccccccccc"+token)
console.log(context.auth)
},[runUseEffect])

 

 const showData = users.map((user,index) => (
  <tr key={index}>
  <td>{index+1}</td>
  <td>{user.name}</td>
  <td>{user.email}</td>
  <td>
       <Link to={`${user.id}`}>
       <FontAwesomeIcon
       icon={faPenToSquare}
       
       style={{ color: "#74afb9",fontSize: "20px", paddingRight: "4px",  cursor:"pointer"}}
     />
     </Link>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteUser(user.id)}
          style={{ color: "red", padding:"0px 20px 0px 20px",fontSize: "20px", paddingRight: "4px", cursor:"pointer"}}
        />{" "}
      </td>

  </tr>
 ));

 
 

  

 
  return (
    <div className="tabel">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{showData}</tbody>
      </table>
    
    </div>
  );

  async function deleteUser(id){ //async awaite  هي المسؤولة عن حل مشكلة التاخر في البيانات 
    try{
   const res= await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`,{
    headers:{
      Authorization:" Bearer "+ token
    }
   }) // awaite هي المسؤولة عن انتظار جلب البيانت لاكمال الكود
   if(res.status===200){ // للتحقق من ان الحالة صحيحة ولكي لا يعطي اخطاء في حال كانت الحالة غير صحيحة
    setRun((prev) => prev+1);
   // console.log(runUseEffect)
   }
    }catch{console.log("none")}
   }

}
