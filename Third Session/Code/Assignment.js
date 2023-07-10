// import React from "react";
// import ReactDOM from "react-dom/client";
import { ReactDOM } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css"
import image from "./Sesond Session/Assignment/download.png";
import user from "./Sesond Session/Assignment/user.jpg"

const Header =()=>{
    return(
        <>
        <header className="header">
            <div className="left">
                <img src={image} alt="Logo"/>
            </div>
            <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src={user} alt="User Icon" />
        </div>
      </header>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header />); 