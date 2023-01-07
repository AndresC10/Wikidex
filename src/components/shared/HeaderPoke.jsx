import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/headerPoke.css'

const HeaderPoke = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/pokedex')
    }

    return (
        <header className='header'>
            <img onClick={handleClick} className='header__img' src="/Home/pokedex.png" alt="" />
            <div className='header__black'>
                <div className='header__circle'></div>
            </div>

        </header>
    )
}

export default HeaderPoke