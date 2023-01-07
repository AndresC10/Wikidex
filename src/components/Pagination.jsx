import React, { useEffect, useState } from 'react'
import './Pokedex/styles/pagination.css'

const Pagination = ({ pokemons, setPage, page }) => {

    const [pokePerPage, setPokePerPage] = useState(8)
    const [nPages, setNPages] = useState()
    const [arrPages, setArrPages] = useState()

    useEffect(() => {
        setNPages(Math.ceil(pokemons?.length / pokePerPage))
        if (nPages) {
            const pagesArr = []
            for (let i = 1; i <= nPages; i++) {
                pagesArr.push(i)
            }
            setArrPages(pagesArr)
        }
    }, [pokemons, nPages])


    const handleClick = e => {
        setPage((e.target.textContent))

    }

    const handlePlus = () => {
        setPage(page + 1)
    }

    const handleMinus = () => {
        setPage(page - 1)
    }

    return (
        <ul className='list-container'>
            <li className={`list__item arrows ${page == 1 && 'none'}`} onClick={handleMinus}>&#60;</li>
            {
                page > 4 ?
                    arrPages?.slice(page - 4, +page + 3).map(e => (
                        <li className={`list__item ${page == e && 'active-page'}`} key={e} onClick={handleClick}>{e}</li>
                    )) :

                    arrPages?.slice(0, 7).map(e => (
                        <li className={`list__item ${page == e && 'active-page'}`} key={e} onClick={handleClick}>{e}</li>
                    ))
            }
            <li className={`list__item arrows ${page == arrPages?.at(-1) && 'none'}`} onClick={handlePlus}>&#62;</li>
        </ul>
    )
}

export default Pagination