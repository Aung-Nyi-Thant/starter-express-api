
export interface Movie {
    _id? : string,
    title: string,
    year: number,
    image_adress:string,
    background_img:string,
    color:string,
    summary:string
};
export interface MovieList {
    movies: Array<Movie>
}

const initialState: MovieList = {
    movies : [
        {
            _id : "1",
            title : "Movie 1",
            year: 2018,
            image_adress:"",
            background_img:"",
            color:"",
            summary:""
        }
    ]
};
function getAllMovie(){
    return fetch('http://localhost:3000/api/movies')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => console.error(error));
}
function findMovieById(id:any){
    return fetch(`http://localhost:3000/api/movies/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => console.error(error));
}

module.exports = {
    getAllMovie,
    findMovieById
}