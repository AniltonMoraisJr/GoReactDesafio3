import React from 'react';

import { Usuario } from './styles';

const UsuarioListItem = ({ data:{id, avatar_url, name}, onDelete }) => (
  <Usuario>
    <img src={avatar_url} alt="Avatar" />
    <strong>{name}</strong>
    <button onClick={() => onDelete(id)}>
      <i className="fa fa-times-circle close" />
    </button>
    <button>
      <i className="fa fa-angle-right" />
    </button>
  </Usuario>
);

export default UsuarioListItem;
