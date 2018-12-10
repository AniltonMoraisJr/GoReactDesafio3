import { call, put, select } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as UsuariosActions } from '../ducks/usuarios';

export function* addUsuario(action) {
  try {
    const { data } = yield call(api.get, `/${action.payload.usuario}`);
    const usuario = {
      id: data.id,
      name: data.name,
      avatar_url: data.avatar_url,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    };

    console.log(usuario);
    yield put(UsuariosActions.addUserSuccess(usuario));
  } catch (error) {}
}
