import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pokemon extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    url: '',
    imageLoading: true,
    imageError: false
  };

  componentDidMount() {
    const { name, url } = this.props;
    const regEx = /(?<=\/)\d+/;
    const pokemonIndex = url.match(regEx).toString();
    const imageUrl =
      pokemonIndex === '10128' ||
        pokemonIndex === '10129' ||
        pokemonIndex === '10146' ||
        pokemonIndex === '10153' ||
        pokemonIndex === '10154'
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`
        : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
      ;

    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokemonIndex: pokemonIndex
    });
  }

  onLoad = () => {
    this.setState({ imageLoading: false })
  }

  onError = () => {
    this.setState({ imageError: true })
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <Link className="link" to={`pokemon/${this.state.pokemonIndex}`}>
          <div className="card">
            <h5 className="cardIndex">{this.state.pokemonIndex}</h5>
            <img className="card-img-top"
              src={this.state.imageUrl}
              alt={this.state.name}
              onLoad={this.imageLoading}
              onError={this.imageError}
            >
            </img>
            <div className="card-body mx-auto">
              <h6 className="card-title" style={{ textTransform: 'capitalize' }}>
                {this.state.name}
              </h6>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}