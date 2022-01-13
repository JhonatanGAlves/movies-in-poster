import React, { useState, useEffect, ChangeEventHandler } from 'react'
import './SearchBar.css'

type SearchProps = {
  placeholder: string,
}

type Movie = {
  titulo: string,
  avatar: string
}

const SearchBar = (props: SearchProps) => {
  const [searchMovie, setSearchMovie] = useState<Movie[]>([])
  const [value, setValue] = useState('')
  const [clearEsc, setClearEsc] = useState(false)

  useEffect(() => {
    if (value) {
      setClearEsc(clearEsc)
    }
  }, [value, clearEsc])

  const changeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className='container-search'>
      <input
        type='text'
        placeholder={props.placeholder}
        value={value}
        onChange={changeMovie}
      />
      {clearEsc ?
        (<span>
          (esc) <strong>x</strong>
        </span>) :
        ('')
      }
    </div>
  )
}

export default SearchBar