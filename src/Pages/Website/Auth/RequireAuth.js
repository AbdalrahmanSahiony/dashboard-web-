import { useContext } from "react";
import { User } from "../Context/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth(){
    const user = useContext(User);
    const location =useLocation();
    console.log(user);
    return(user.auth?<Outlet/>:<Navigate state={{from:location}} replace to="/login" />)
}