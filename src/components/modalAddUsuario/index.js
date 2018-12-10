import React, { Component } from 'react';

import { Container, Modal } from './styles';

export default class ModalAddUsuario extends Component {
  state = {
    inputUser: '',
  };

  render() {
    return (
      <Container>
        <Modal>
          <strong> Adicionar novo usuário </strong>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              return this.props.onSubmit(this.state.inputUser);
            }}
          >
            <input
              type="text"
              placeholder="Usuário do GitHub"
              value={this.state.inputUser}
              onChange={e => this.setState({ inputUser: e.target.value })}
            />
            <footer>
              <a className="btn-cancel" onClick={this.props.dismissModal}>
                Cancelar
              </a>
              <button className="btn-save" type="submit">
                Salvar
              </button>
            </footer>
          </form>
        </Modal>
      </Container>
    );
  }
}
