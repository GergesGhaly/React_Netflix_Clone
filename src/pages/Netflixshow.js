import React from 'react'
import api from '../api/Api'
import Banner from '../component/Banner/Banner'
import Nav from '../component/nav/Nav'
import Row from '../component/Row/Row'




const Netflixshow = () => {
    return (
        <div>
            <Nav/>
            <Banner/>
            <Row title="NETFLIX ORIGINALS" fetchurl={api.fetchnetflexorgin} ISlargrow/>
            <Row title="Trending" fetchurl={api.fetchTrending}/>
            <Row title="Top Rated" fetchurl={api.fetchtoprat}/>
            <Row title="Active Movies" fetchurl={api.fetchactivemovis}/>
            <Row title="Comdy Movies" fetchurl={api.fetchcomdymovie}/>
            <Row title="Horor Movies" fetchurl={api.fetchhorormovie}/>
        </div>
    )
}

export default Netflixshow
