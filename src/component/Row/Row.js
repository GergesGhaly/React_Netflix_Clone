import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import YouTube from 'react-youtube'
import'./Row.css'
import movieTrailer from "movie-trailer"

const base_url="https://image.tmdb.org/t/p/original"
const REACT_APP_API="https://api.themoviedb.org/3"


const Row = ({title,fetchurl,ISlargrow}) => {

const [movies,setMovies] = useState([]);
const [trsilerurl,setTrsilerurl] = useState("") 

useEffect(()=>{
const fetcData = async ()=>{

const response = await axios.get(
    `${REACT_APP_API}${fetchurl}`
    );

    setMovies(response.data.results)
    return response
}

fetcData()
},[]);



const handelclick=(movie)=>{

    if(trsilerurl){
        setTrsilerurl("")

    }else{
        movieTrailer(movie?.name||"")
        .then((url)=>{
            const urlprams = new URLSearchParams(new URL(url).search)
            setTrsilerurl(urlprams.get("v"))
        }).catch((err)=>console.log(err))
    }


}

const opts={
    height:"390",
    width:"100%",
    playerVars:{
    autoplay:1,
    }
}

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies && movies.map((movie)=>{
                    return(
                        <img 
                        onClick={() => handelclick(movie)}
                        key={movie.id}
                        className={`row-poster ${ISlargrow && "row-posterLarge"}`}
                        src={`${base_url}${ISlargrow ?movie.poster_path:movie.backdrop_path}`}
                        alt={movie.name}
                        />
                    )
                } )}
            </div>
            {trsilerurl && <YouTube videoId={trsilerurl} opts={opts}/>}
        </div>
    )
}

export default Row
