import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import natflixlogo from '../../images/NetFlixLogo.png'
import natflixavatar from '../../images/NetflixAvatar.png'


const Nav = () => {

    const[Show,setShow] = useState(false)

    const navbarvisabilioty=()=>{
        if(window.scrollY>100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",navbarvisabilioty)

        return()=>{
            window.removeEventListener("scroll",navbarvisabilioty)
        }
    },[])

    return (
        <div className={`nav ${Show && "nav-black"}`}>

            <Link to="/">
                <img src={natflixlogo} alt="logo" className="nav-logo" />
            </Link>
            
            <img src={natflixavatar} alt="logo" className="nav-avatar" />

        </div>
    )
}

export default Nav
