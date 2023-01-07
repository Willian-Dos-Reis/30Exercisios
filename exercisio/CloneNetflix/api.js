
const API_KEY = '6f18e7b560e9d377244216ad6b35d8a2';

const categorias = [

    {
        name : "trending",
        title: "Em alta",
        path : "/tranding/all/week?api_key=${API_KEY}&language=pt-BR",
        
    },
    {
        name : "netflixOriginls",
        title: "Originais NetFlix",
        path : "/discover/tv?api_key=${API_KEY}&with_networks=213",

    },
    {
        name : "topRated",
        title: "Populares",
        path : "/move/top_rated?api_key=${API_KEY}&language=pt-BR",

    },
    {
        name : "comedy",
        title: "Comédias",
        path : "/discover/tv?api_key=${API_KEY}&with_genres=35",

    },
    {
        name : "Romances",
        title: "Romances",
        path : "/discover/tv?api_key=${API_KEY}&with_genres=1074",

    },
    {
        name : "documentaries",
        title: "Documentarios",
        path : "/discover/tv?api_key=${API_KEY}&with_genres=99",

    },
    
]

export const getMovies = async (path) =>{
    //const fazendo a requisição
    let url = 'https://api.themoviedb.org/3/movie/550?api_key=6f18e7b560e9d377244216ad6b35d8a2'
    
    try {

    } catch(erro){ //caso der erro ele emvia pro console e informa 
        console.log("erro getMovies " , erro)
        
    }
}