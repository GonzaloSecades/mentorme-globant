import Burger from "./Components/Burger";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation().pathname;
  return (
    <div className="container">
      {location === "/login" ? null : <Burger />}
      <div className="logo">
        mentor<span>me</span>
      </div>
    </div>
  );
}
export default Navbar;
