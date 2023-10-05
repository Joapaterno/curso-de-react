import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './conteiners/itemListContainer/itemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="HOLA,bienvenidos a mi tienda , que deseas comprar"/>
    </> 
  )
}

export default App
