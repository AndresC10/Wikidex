import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainer } from '../store/slices/trainer.slice'
import '../components/shared/styles/home.css'


const home = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainer(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }

    return (
        <>
            <div className='home-container'>
                <img className='home__img' src="/Home/pokedex.png" alt="" />
                <h1 className='home__h1'>Hi Trainer!</h1>
                <p>Give me your name to start</p>
                <form className='form-container' onSubmit={handleSubmit}>
                    <input className='form__input' id='name' type="text" />
                    <button className='form__button'>Start</button>
                </form>
            </div>
            <div className='footer-container'>
                <footer className='footer'>
                    <div className='footer__black'>
                        <div className='footer__circle'></div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default home