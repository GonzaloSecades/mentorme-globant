import Burger from "./Components/Burger"
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation().pathname;
    return (
        <div className="container">
            {location === "/login" ? <div></div> : <Burger />}
            <div className="logo">
                mentor<span>me</span>
            </div>
        </div>
    )
}
