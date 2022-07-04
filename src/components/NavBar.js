import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>

<div className="navigation_bar">
    <nav className="navbar navbar-expand-lg">  
    
        
        <button style={{backgroundColor: "rgb(114, 91, 91)"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="nav">
        <ul className="navbar-nav mr-auto">
            <div className="collapse navbar-collapse " id="navbarSupportedContent"> 
                <li className="nav-item">
                    <Link style={{color: 'black'}} className="nav-link" to={"/"}><b> Explore</b></Link>
                </li>
                <li>
                    
                        <h2 style={{color: 'black'}}>Maven Exchange</h2>
                   
                </li>
                <li className="nav-item">
                    <Link style={{color: 'black'}} className="nav-link" to={"/create"}><b>Create</b></Link>
                </li>
                </div>
           
        </ul>
    </div>
        
    </nav>
    </div>
   
    
    
    </>
  );
}
