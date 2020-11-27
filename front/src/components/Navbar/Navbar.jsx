import React from 'react'
import { useLocation } from "react-router-dom";
import Burger from "./Components/Burger"

export default function Navbar() {
    const location = useLocation().pathname;
    return (
        <div className="container">
            {location === "/login" ? <div/> : <Burger />}
            <div className="logo">
                mentor<span>me</span>
            </div>
        </div>
    )
}
