import React, { useState } from 'react'
import './SearchBar.css'

type SearchProps = {
  placeholder: string,
  className?: string,
  value?: string
}

type Movie = {
  titulo: string,
  avatar: string
}

const SearchBar = (props: SearchProps) => {
  const [searchMovie, setSearchMovie] = useState<Movie[]>([])
  const [value, setValue] = useState('')
  let hideClose = true

  if (value != '' && value != null) {
    hideClose = false
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onKeyUp = (e: any) => {
    if (e.keyCode === 27) {
      setValue('')
    }
  }

  const onClickClear = () => {
    setValue('')
  }

  return (
    <span className='container-search'>
      <input
        type='text'
        className={props.className}
        placeholder={props.placeholder}
        value={props.value || value}
        onKeyUp={onKeyUp}
        onChange={handleChange}
      />
      <span className='btn-clear' onClick={onClickClear}>
        {!hideClose ? '(esc) x' : null}
      </span>
    </span>
  )
}

export default SearchBar