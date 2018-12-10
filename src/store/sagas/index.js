import { all, takeLatest } from 'redux-saga/effects';
import { Types as UsuariosTypes } from '../ducks/usuarios';

import { addUsuario } from './usuarios';

export default function* rootSaga() {
  yield all([takeLatest(UsuariosTypes.ADD_USER, addUsuario)]);
}
