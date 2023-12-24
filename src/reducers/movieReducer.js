import { useDispatch } from 'react-redux';
import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from '../data.js'
import { ADD_FAVORITE,REMOVE_FAVORITE,TOGGLE_FAVORITES } from '../actions/favoritesActions.js';


const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
  favorites: []
}
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => (action.payload !== item.id))
      }
      case ADD_MOVIE:
        return {
          ...state,
          movies: [...state.movies, action.payload]
        }

  case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload] // favoriler listesine yeni filmi ekle
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload) // favoriler listesinden filmi çıkar
      }
    default:
      return state
  }
}

export default reducer;