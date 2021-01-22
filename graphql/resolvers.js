import { getById, movies, SH, getMovieById } from "./db";

const resolvers = {
  Query: {
    name : () => "seunghwan",
    people : () => SH,
    person : (_, {id} ) => getById(id),
    movies : () => movies,
    movie : (_, {id}) => getMovieById(id),
  },
  Mutation : {
    addMovie : (_, {name, score}) => 
  }
};

export default resolvers;