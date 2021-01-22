import { getById, movies, SH, getMovieById, addMovie, deleteMovie, getMovies } from "./db";

const resolvers = {
  Query: {
    name : () => "seunghwan",
    people : () => SH,
    person : (_, {id} ) => getById(id),
    movies : () => movies,
    movie : (_, {id}) => getMovieById(id),
    APImovies : (_, {rating, limit}) => getMovies(limit, rating)
  },
  Mutation : {
    addMovie : (_, {name, score}) => addMovie(name, score),
    deleteMovie : (_, {id}) => deleteMovie(id)
  }
};

export default resolvers;