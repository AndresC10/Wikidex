import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import PokeCard from '../components/Pokedex/PokeCard'
import '../components/Pokedex/styles/pokedex.css'

const Pokedex = () => {
    const { trainer } = useSelector(state => state)

    const [pokemons, setPokemons] = useState()
    const [types, setTypes] = useState()
    const [selectedType, setSelectedType] = useState("All pokemon")

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type`)
            .then(res => setTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (selectedType !== 'All pokemon') {
            axios.get(selectedType)
                .then(res => setPokemons(res.data.pokemon.map(e => e.pokemon)))
                .catch(err => console.log(err))
        } else {
            const URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000000000000000000`
            axios.get(URL)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))
        }
    }, [selectedType])

    const handleSubmit = e => {
        e.preventDefault()

        const input = e.target.search.value.trim().toLowerCase()
        navigate(`/pokedex/${input}`)
    }

    const handleChange = e => {
        setSelectedType(e.target.value)
        setPage(1)
    }

    //Lógica de paginación
    const [page, setPage] = useState(1)
    const initialPoke = (page - 1) * 8
    const lastPoke = page * 8

    return (
        <div>
            <div className='header__items'>
                <h2 className='trainer__name'><span className='trainer__name__span'>Welcome {trainer},</span> here you can find your favorite pokemon.</h2>
                <div className='search-container'>
                    <form className='form-container' onSubmit={handleSubmit}>
                        <input className='form__input' id='search' type="text" placeholder='Search a pokemon' />
                        <button className='form__button'>Search</button>
                    </form>
                    <select className='type__select' onChange={handleChange}>
                        <option className='type__option' value="All pokemon">All pokemons</option>
                        {
                            types?.map(type => (
                                <option className='type__option' key={type.url} value={type.url}>{type.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className='poke-container'>
                {
                    pokemons?.slice(initialPoke, lastPoke).map(pokemon => (
                        <PokeCard
                            key={pokemon.url}
                            URL={pokemon.url}
                            initialPoke={initialPoke}
                            lastPoke={lastPoke}
                        />
                    ))
                }
            </div>
            <div className='pagination-container'>
                <Pagination
                    pokemons={pokemons}
                    setPage={setPage}
                    page={page}
                />
            </div>
        </div>
    )
}

export default Pokedex