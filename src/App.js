import { Routes, Route } from 'react-router-dom'
import './App.css'
//Components
import Nav from './components/Nav';
//Contexts
import UserContext from './contexts/UserContext';
//Pages
import Login from './pages/Login';

const App = () => {
  // In order for us to use context, we import first, then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  return (
    <div>
      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share information to all of its children. We need the value prop inside our provider.*/}
      <UserContext.Provider value={'Ash Ketchum'}>
        <Nav />
        {/* We need to wrap our all of our roues inside react outer 'Routes' component */}
        <Routes>
          <Route path='login'element={<Login />}/>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

