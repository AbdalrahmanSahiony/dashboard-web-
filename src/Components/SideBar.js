import { faUser, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div
      className="side-bar"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <NavLink to="Users" className="item-link" activeClassName='active'>
      
        {" "}
        <FontAwesomeIcon icon={faUsers}  className="fa-solid"/> Users
      </NavLink>
      <NavLink to="CreateUser" className="item-link" activeClassName='active'>
        {" "}
        <FontAwesomeIcon icon={faUserPlus}  className="fa-solid" /> NewUser
      </NavLink>
    </div>
  );
}
