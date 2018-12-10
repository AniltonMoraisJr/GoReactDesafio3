import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MapGL, { Marker } from 'react-map-gl';
import { Creators as UsuariosActions } from '../../store/ducks/usuarios';

import 'mapbox-gl/dist/mapbox-gl.css';

import UsuariosList from '../../components/usuariosList';
import ModalAddUsuario from '../../components/modalAddUsuario';

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    latitude: null,
    longitude: null,
    showModal: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [latitude, longitude] = e.lngLat;
    this.setState({ latitude, longitude });
    console.log(latitude);
    this.setState({ showModal: true });
  };

  dismissModal = () => {
    this.setState({ showModal: false });
  };

  addNewUser = (usuario) => {
    console.log(usuario);
    this.props.addUser(usuario, this.state.latitude, this.state.longitude);
    this.dismissModal();
  };

  render() {
    return (
      <Fragment>
        {this.state.showModal && (
          <ModalAddUsuario onSubmit={this.addNewUser} dismissModal={this.dismissModal} />
        )}

        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiYW5pbHRvbm1vcmFpc2pyIiwiYSI6ImNqcGhsMjI3ZTB4cGIzdm1sa2gwNDhoNzAifQ.JxP54LkG2zfsvjg1Sgl60g"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <UsuariosList />
          {this.props.usuarios.data.map(usuario => (
            <Marker
              key={usuario.id}
              latitude={usuario.latitude}
              longitude={usuario.longitude}
              captureClick
            >
              <img
                style={{
                  borderRadius: 100,
                  width: 48,
                  height: 48,
                }}
                src={usuario.avatar_url}
              />
            </Marker>
          ))}
        </MapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  usuarios: state.usuarios,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsuariosActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
