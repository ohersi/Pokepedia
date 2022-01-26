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
import Pokedex from './pages';

const App = () => {
  // In order for us to use context, we import first, then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  // We will pass on our user to all of App's children via the Provider value prop
  const [user, setUser] = useState('')
  const [pokeDex, setPokeDex] = useState([])

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
          <Route path='pokedex' element={<Pokedex pokeDex={pokeDex} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

