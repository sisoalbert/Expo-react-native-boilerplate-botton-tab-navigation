import {ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM} from './actions';
const initialState = {
  favorites: [],
};
function snacksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE_ITEM:
      return {...state, favorites: [...state.favorites, action.payload]};
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          snack => snack.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}
export default snacksReducer;
