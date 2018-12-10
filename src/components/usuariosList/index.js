import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, List } from './styles';

import UsuarioListItem from '../usuariosListItem';

class UsuariosList extends Component {
  state = {};

  render() {
    return (
      <Container>
        <header>
          <h1>Lista de Usuários</h1>
        </header>
        <List>
          <ul>
            {this.props.usuarios.data.length > 0 ? (
              this.props.usuarios.data.map(usuario => <UsuarioListItem key={usuario.id} />)
            ) : (
              <h4> Nenhum usuário adicionado </h4>
            )}
          </ul>
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  usuarios: state.usuarios,
});

export default connect(mapStateToProps)(UsuariosList);
