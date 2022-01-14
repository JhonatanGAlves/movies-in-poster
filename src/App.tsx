import React from 'react'
import logo from './logo.svg'
import './styles.css'
import Header from './components/Header'
import MoviePoster from './components/MoviesPoster'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <h2 style={{
          color: '#373737',
          fontSize: '32px',
          marginTop: '100px'
        }}>EM CARTAZ
        </h2>
        <MoviePoster />
        <Footer />
      </div>
    </>
  )
}

export default App
