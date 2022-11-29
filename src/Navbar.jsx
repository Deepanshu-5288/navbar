import React, { useEffect, useRef, useState } from 'react';
import logo from "./logo.svg";
import {FaBars} from "react-icons/fa";
import {links, social} from "./data";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const handleSubmit = () =>{
        setToggle(!toggle);
    }

    useEffect(() =>{
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if(toggle){
            linksContainerRef.current.style.height = `${linksHeight}px`;
        }else{
            linksContainerRef.current.style.height = `0px`;
        }
    }, [toggle])

  return (
   <nav>
    <div className='nav-center'>
        <div className='nav-header'>
            <img src={logo} alt="logo" />
            <button className='nav-toggle'  onClick={handleSubmit} >
            <FaBars />
            </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
                {links.map((link) => {
                    const {id, url, text} = link;
                    return (
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
        <ul className='social-icons'>
            {social.map((socialIcons) => {
                const {id, url, icon} = socialIcons;
                return (
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                );
            })}
        </ul>
    </div>
   </nav>
  )
}

export default Navbar