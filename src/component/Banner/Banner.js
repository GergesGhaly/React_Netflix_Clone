import axios from 'axios'
import React ,{useEffect,useState} from 'react'
import api from '../../api/Api'
import './Banner.css'


const REACT_APP_API="https://api.themoviedb.org/3"


const Banner = () => {

const [Movie,setMovie] = useState([]);

useEffect(()=>{
    const fetchData = async ()=>{
        const response= await axios.get(`${REACT_APP_API}${api.fetchnetflexorgin}`)

        setMovie(
            response.data.results[
            Math.floor(Math.random()* response.data.results.length -1)
        ])
return response
    }
    fetchData()
},[])
const trancate = (str,n)=>{
    return str?.length>n ? str.substr(0,n-1) + "..." : str
}
console.log(Movie)

    return (
        <header 
        className="banner"
        style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition:"center center"
        }}
        >

            <div className="banner-contents">
                <h1 className="banner-title">
                    {Movie?.title || Movie?.name || Movie?.originam_name}
                </h1>
                <button type="" className="banner-button">play</button> 
                <button type="" className="banner-button">my list</button> 

                <h1 className="banner-description">{trancate(Movie?.overview,150)}</h1>
            </div>

            <div className="banner-fadeBottom">
                
            </div>
            
        </header>
    )
}

export default Banner
