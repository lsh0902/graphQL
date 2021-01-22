export const SH = [
  {
  id : "1",
  name : "lsh",
  age : 13,
  schoooool : "아주대대대"
  },
  {
    id : "2",
    name : "hwj",
    age : 23,
    schoooool : "벳푸국제"
  },
  {
    id : "3",
    name : "ㅇㅇㅇ",
    age : 22,
    schoooool : "얻ㄴ가"
  }
];
export let movies = [
  {
    id : 1,
    name : "something",
    score : 23
  },
  {
    id : 2,
    name : "hi sau",
    score : 88
  },
  {
    id : 3,
    name : "sing sang sung sung",
    score : 36
  },
]

export const getById = id => {
  const filtered = SH.filter(person => String(id) === person.id);
  return filtered[0]
};

export const getMovieById = id => {
  const filtered = movies.filter(movie => id === movie.id);
  return filtered[0]
};

export const deleteMovie = id => {
  const cleanedMovie = movies.filter(movies => movie.id !== String(id))
  if(movies.length > cleanedMovie.length){
    movies = cleanedMovie;
    return true;
  } else {
    return false;
  }
};

const getLastId = function() {
  a = movies[movies.length - 1];
  return a.id
};

export const addMovie = (name, score) => {
  const newMovie = {
    id : getLastId() + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};