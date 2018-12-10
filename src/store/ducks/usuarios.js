/* Types */
export const Types = {
  ADD_USER: 'usuarios/ADD_USER',
  ADD_USER_SUCCESS: 'usuarios/ADD_USER_SUCCESS',
  REMOVE_USER: 'usuarios/REMOVE_USER',
};

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  data: [],
};
/* Reducer */
export default function usuarios(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER:
      return { ...state, isLoading: true };
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.REMOVE_USER:
      return{
      ...state,
      isLoading:false,
      data: [...state.data.filter(usuario => usuario.id !== action.payload.id)]
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
  removeUser: id => ({
    type: Types.REMOVE_USER,
    payload: {id},
  }),
};
