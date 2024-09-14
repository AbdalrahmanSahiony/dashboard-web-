import "../style.css";
import { Link } from "react-router-dom";

export default function Header() {
  function handlelogout() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/login";
  }

  return (
    <nav className="nav shadow">
      <div
        className="d-flex"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <Link className="text" to="/">
            <h6>Home</h6>
          </Link>
          <h6 className="text">About</h6>
        </div>
        <div className="d-flex" style={{ display: "flex", gap: "20px" }}>
          
            <div>
              <Link
                to="/register"
                className="buttom"
                style={{ textAlign: "center" }}
              >
                Register
              </Link>

              <Link
                to="/login"
                className="buttom"
                style={{ textAlign: "center" }}
              >
                LogIn
              </Link>
            </div>

            <Link
                to="/Dashboard"
                className="buttom"
                style={{ textAlign: "center" }}
              >
                Dashboaed
              </Link>

          {
            <Link
              to=""
              className="buttom"
              onClick={handlelogout}
              style={{ textAlign: "center" }}
            >
              Log out
            </Link>
          }
        </div>
      </div>
    </nav>
  );
}
