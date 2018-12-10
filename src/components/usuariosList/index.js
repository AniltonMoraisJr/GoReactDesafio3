import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, List } from './styles';
import { toast } from 'react-toastify';
import UsuarioListItem from '../usuariosListItem';
import { bindActionCreators } from 'redux';
import {Creators as UsuariosActions} from '../../store/ducks/usuarios';

class UsuariosList extends Component {
  state = {};

  removeUser = id => {
    this.props.removeUser(id);
    toast.success("Usuário removido !", {
      position: toast.POSITION.TOP_RIGHT
    });
  }
  render() {
    return (
      <Container>
        <header>
          <h1>Lista de Usuários</h1>
        </header>
        <List>
          <ul>
            {this.props.usuarios.data.length > 0 ? (
              this.props.usuarios.data.map(usuario => <UsuarioListItem key={usuario.id} data={usuario} onDelete={this.removeUser}/>)
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

const mapDispatchToProps = dispatch => bindActionCreators(UsuariosActions, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(UsuariosList);
