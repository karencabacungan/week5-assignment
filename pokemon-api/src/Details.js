import React from 'react';

export default class Details extends React.Component {
    state = {
        isLoading: true,
        details: [],
    };

    componentDidMount() {
        const { name } = this.props.match.params;
        fetch(`http://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.json())
            .then(data => this.setState({
                details: data,
                isLoading: false
            }));
    }

    PokemonDetailContents = () => {
        return this.state.isLoading
            ? <div className='isLoading'><h1>Loading Pokémon...</h1></div>
            : <div>
                <h1>{this.state.details.name}</h1>
                <div>
                    <div>
                        <img src={this.state.details.sprites.front_default} alt={this.state.details.name} />
                    </div>
                    <div>
                        <p><b>Base Experience:</b> {this.state.details.base_experience}</p>
                    </div>
                    <div>
                        <p><b>Height:</b> {this.state.details.height}</p>
                    </div>
                    <div>
                        <p><b>Weight:</b> {this.state.details.weight}</p>
                    </div>
                    <div>
                        <p><b>Abilities:</b>
                            {this.state.details.abilities.map(ability =>
                                <li key={ability.ability.name}>{ability.ability.name}</li>)}
                        </p>

                    </div>
                    <div>
                        <p><b>Type:</b>
                            {this.state.details.types.map(type =>
                                <li key={type.type.name}>{type.type.name}</li>)}
                        </p>
                    </div>
                </div>
            </div>;
    }

    render() {
        return (
            <div>{this.PokemonDetailContents()}</div>
        )
    };
}