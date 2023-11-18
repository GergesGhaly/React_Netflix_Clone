const API_KEY = 'b5347c780b99c35d84e6b3a5d8719791'

const api ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-Us`,
    fetchnetflexorgin:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchtoprat:`/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
    fetchactivemovis:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchcomdymovie:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchhorormovie:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchromancmovie:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchdocmovie:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default api

