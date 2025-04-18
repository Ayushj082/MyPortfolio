import { navLinks } from "../constants/index.js"
import { useEffect, useState } from "react"

const NavBar = ()=>{

    const [scrolled, setScrolled]= useState(false);
    useEffect(()=>{
        const handleScroll = () =>{
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])
 return(
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
    <div className="inner">
        <a className="logo" href="#">
            Ayushman 
        </a>
        <nav className="desktop">
        <ul>
        {navLinks.map(({link,name})=>(
            <li key={name} className="group">
                <a href={link}
                target={link.startsWith("http") ? "_blank" : "_self"}
                rel={link.startsWith("http") ? "noopener noreferrer" : undefined} >
                    <span> {name}</span>
                    <span className="underline"> </span>
                </a>
            </li>
        ))}
            
        </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
            <div className="inner">
                <span> Contact Me </span>
            </div>
        </a>
    </div>
    </header>
 )
}

export default NavBar