import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Creators as UsuariosActions } from '../ducks/usuarios';


export function* addUsuario(action) {
  try {
    const { data } = yield call(api.get, `/${action.payload.usuario}`);
    const isDuplicated = yield select(state => state.usuarios.data.find(usuario => usuario.id === data.id));
    if(isDuplicated){
      toast.error("Usuário já criado, escolha outro !", {
        position: toast.POSITION.TOP_RIGHT
      });
    }else{
      const usuario = {
        id: data.id,
        name: data.name,
        avatar_url: data.avatar_url,
        latitude: action.payload.longitude,
        longitude: action.payload.latitude,
      };
      yield put(UsuariosActions.addUserSuccess(usuario));
      toast.success("Usuário adicionado !", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

  } catch (error) {
    toast.error("Usuário não encontrado !", {
      position: toast.POSITION.TOP_RIGHT
    });
  }
}
