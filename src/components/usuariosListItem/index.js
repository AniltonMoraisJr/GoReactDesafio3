import React from 'react';

import { Usuario } from './styles';

const UsuarioListItem = ({ avatar_url, name }) => (
  <Usuario>
    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="Avatar" />
    <strong>Diego Fernandes</strong>
    <i className="fa fa-times-circle close" />
    <i className="fa fa-angle-right" />
  </Usuario>
);

export default UsuarioListItem;
