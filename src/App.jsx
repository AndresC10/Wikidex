import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import HeaderPoke from './components/shared/HeaderPoke'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexInfo from './pages/PokedexInfo'

function App() {

  const trainer = useSelector(state => state.trainer)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokedexInfo />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
