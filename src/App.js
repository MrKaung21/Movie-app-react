import { useEffect } from "react"
import './App.css'

const API_URL = 'http://www.omdbapi.com?apikey=31dc8813'

const App = () => {

  const searchMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json()
  }

  useEffect(() => {
    searchMovie()
  }, [])
  return (
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input 
            placeholder="Search for movies"
          />
        </div>
    </div>
  )
}

export default App