import { Routes, Route } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
//CSS
import './App.css'
//Components
import Nav from './components/Nav';
//Contexts
import UserContext from './contexts/UserContext';
//Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Favorites from './pages/Favorites';

const App = () => {
  // In order for us to use context, we import first, then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  // We will pass on our user to all of App's children via the Provider value prop
  const [user, setUser] = useState('')
  const [pokeDex, setPokeDex] = useState([])
  const [favorite, setFavorite] = useState([])

  useEffect(() => {
    fetchPokemon()
    //Dependecny array: if empty, it will call useEffect ONCE only when DOM Component loads
  }, [])

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
      setPokeDex(response.data.results)

    }
    catch (error) {
      console.log(error)
    }
  }

  const addToFavorite = (pokemon) => {
    // When we click like inside Pokedex, send clicked Pokemon back to App
    //Trigger this function to update our state, App will then pass our state as props to Favorites
    setFavorite([...favorite, pokemon])
    console.log('we added to favorite:', favorite)
  }
  const removeFromFavorite = (pokemon) => {
      const newFavArray = favorite.filter((item) => item !== pokemon)
      setFavorite(newFavArray)
      console.log('Removed from favorites', newFavArray)
  }
  // console.log('This is our pokedex', pokeDex)

  return (
    <div>
      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share information to all of its children. We need the value prop inside our provider.*/}
      <UserContext.Provider value={user}>
        <Nav />
        {/* We need to wrap our all of our roues inside react outer 'Routes' component */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='pokedex' element={
            <Pokedex
              pokeDex={pokeDex}
              itemsPerPage={8}
              addToFavorite={addToFavorite}
              removeFromFavorite={removeFromFavorite}
            />} />
          <Route path='favorites' element={
            <Favorites
              favorite={favorite}
              removeFromFavorite={removeFromFavorite}
            />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

