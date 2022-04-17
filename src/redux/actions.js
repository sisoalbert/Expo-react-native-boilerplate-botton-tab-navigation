export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

export const addFavorite = snack => dispatch => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: snack,
  });
};

export const removeFavorite = snack => dispatch => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: snack,
  });
};
