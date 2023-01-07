import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../components/pokedexInfo/styles/pokedexInfo.css'

const PokedexInfo = () => {

    const { name } = useParams()

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [pokemon])

    const textTransform = string => {
        const movement = string.charAt(0).toUpperCase() + string.slice(1)
        const transformedMovement = movement.replace('-', ' ')
        return transformedMovement
    }

    return (
        <div className='pokemonInfo-container'>
            <div className='pokemon-details-container'>
                <div className={`pokemon-img__container bg-${pokemon?.types[0].type.name}`}>
                    <img className='pokemon-img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                </div>
                <div className='pokemon-name-container'>
                    <h3 className={`pokemon-id name-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h3>
                    <h3 className={`pokemon-name name-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                    <ul className='pokemon-list-container'>
                        <li className='pokemon-list-item'>Weight <span className='pokemon-list-span'>{pokemon?.weight}</span></li>
                        <li className='pokemon-list-item'>Height <span className='pokemon-list-span'>{pokemon?.height}</span></li>
                    </ul>
                </div>
                <div className='pokemon-typeAndabilities-container'>
                    <div className='pokemon-type'>
                        <h4 className='pokemon-h4'>Type</h4>
                        {
                            pokemon?.types.map(e => (
                                <li className={`pokemon-type__li type-${e.type.name}`}>
                                    {e.type.name}
                                </li>
                            ))
                        }
                    </div>
                    <div className='pokemon-abilities'>
                        <h4 className='pokemon-h4'>Abilities</h4>
                        {
                            pokemon?.abilities.map(e => (
                                <li className='pokemon-abilities-li'>
                                    {e.ability.name}
                                </li>
                            ))
                        }
                    </div>
                </div>
                <div className='stats-container'>
                    <h3 className='stats-h3'>Stats</h3>
                    <ul className='stats-ul'>
                        <li className='stat__list-item'>
                            <header className='stat-header'>HP<span>{`${pokemon?.stats[0].base_stat}/255`}</span></header>
                            <div className='bar-container'>
                                <div className='progressbar' style={{ width: `${(pokemon?.stats[0].base_stat / 255) * 100}%` }}></div>
                            </div>
                        </li>
                        <li className='stat__list-item'>
                            <header className='stat-header'>Attack<span>{`${pokemon?.stats[1].base_stat}/165`}</span></header>
                            <div className='bar-container'>
                                <div className='progressbar' style={{ width: `${(pokemon?.stats[1].base_stat / 165) * 100}%` }}></div>
                            </div>
                        </li>
                        <li className='stat__list-item'>
                            <header className='stat-header'>Special Attack<span>{`${pokemon?.stats[3].base_stat}/170`}</span></header>
                            <div className='bar-container'>
                                <div className='progressbar' style={{ width: `${(pokemon?.stats[3].base_stat / 170) * 100}%` }}></div>
                            </div>
                        </li>
                        <li className='stat__list-item'>
                            <header className='stat-header'>Defense<span>{`${pokemon?.stats[2].base_stat}/184`}</span></header>
                            <div className='bar-container'>
                                <div className='progressbar' style={{ width: `${(pokemon?.stats[2].base_stat / 184) * 100}%` }}></div>
                            </div>
                        </li>
                        <li className='stat__list-item'>
                            <header className='stat-header'>Special Defense<span>{`${pokemon?.stats[4].base_stat}/154`}</span></header>
                            <div className='bar-container'>
                                <div className='progressbar' style={{ width: `${(pokemon?.stats[4].base_stat / 154) * 100}%` }}></div>
                            </div>
                        </li>
                        <li className='stat__list-item'>
                            <header className='stat-header'>Velocity<span>{`${pokemon?.stats[5].base_stat}/200`}</span></header>
                            <div className='bar-container'>
                                <div className='progressbar' style={{ width: `${(pokemon?.stats[5].base_stat / 200) * 100}%` }}></div>
                            </div>
                        </li></ul>
                </div>
            </div>
            <div className='pokemon-movement__container'>
                <h3 className='pokemon-movement__title'>Movements</h3>
                <div className='pokemon-movement__movements'>
                    {
                        pokemon?.moves.map(e => (
                            <span className='pokemon-movement__movement'>{textTransform(e.move.name)}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PokedexInfo