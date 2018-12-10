/* Types */
export const Types = {
  ADD_USER: 'usuarios/ADD_USER',
  ADD_USER_SUCCESS: 'usuarios/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'usuarios/ADD_USER_FAILURE',
  REMOVE_USER: 'usuarios/REMOVE_USER',
  REMOVE_USER_SUCCESS: 'usuarios/REMOVE_USER_SUCCESS',
  REMOVE_USER_FAILURE: 'usuarios/REMOVE_USER_FAILURE',
};

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  data: [],
};
/* Reducer */
export default function usuarios(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, isLoading: true };
    case 'ADD_USER_SUCCESS':
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    default:
      return state;
  }
}
/* Actions */

export const Creators = {
  addUser: (usuario, latitude, longitude) => ({
    type: Types.ADD_USER,
    payload: {
      usuario,
      latitude,
      longitude,
    },
  }),
  addUserSuccess: data => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { data },
  }),
};
