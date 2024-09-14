import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../../../Components/Forms/Form";

export default function UpdateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const id = window.location.pathname.split("/").slice(-1); //[0]

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setEmail(data[0].email);
        console.log("sssss", { name }, { email });
      }, []);
  });

  

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
    <h2>Update User</h2>
    <div className="parent" style={{marginTop:"20%", height:"100vh"}}> 
    <Form
      button="Update"
      name={name}
      email={email}
      endpoint={`user/update/${id}`}
      //navigate="Dashboard/Users"
      hasLocalstorge  = {false}
    />
    </div>
    </div>
  );
}
