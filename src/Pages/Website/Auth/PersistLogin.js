import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "../../../Components/loading.css"
import axios from "axios";
import { User } from "../Context/UserContext";
import Cookies from "universal-cookie";

export default function PersistLogin(){
  // Get curent user

  const context=useContext(User);
  const token=context.auth;

  const cookie = new Cookies();
  const tokencookie = cookie.set("Bearer" , token);
  const getToken = cookie.get("Bearer")

  const[loading,setLoading]=useState(true);

  // Send refresh token
  useEffect(() => {
    async function refresh() {
   
   
        try {
          console.log("Attempting to refresh token with:", token);
      
          const res = await axios.post('http://127.0.0.1:8000/api/refresh', null, {
            headers: {
              
              Authorization: "Bearer " + token
            }
          });
      
          context.setAuth((prev) => {
            return {
              ...prev,
              token: res.data.token
            
            };
          });
      
          console.log("Old token: " + token);
          console.log("New token: " + res.data.token);
          console.log("auth" + context.auth)
      
        } catch (error) {
          console.error("Error refreshing token:", error);
          if (error.response) {
            console.error("Error details:", error.response.data);
            if (error.response.status === 401) {
              console.error("Unauthorized: The token might be invalid or expired.");
            } else {
              console.error("An unexpected error occurred:", error.response.status);
            }
          } else {
            console.error("Error without response:", error.message);
          }
        }
      }
      !token? refresh():setLoading(false);
      console.log("tttttttttt"+token)
    },[])
      return(
       loading? <loading/>:<Outlet/>
      )

      
    
}