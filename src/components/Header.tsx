import React from 'react'
import './styles.css'
import LogoHeader from '../assets/images/logo.svg'
import SearchBar from './SearchBar/SearchBar'

const Header = (props: any) => {
  return (
    <div className='container'>
      <div className='container-header'>
        <div className='container-logo-header'>
          <img src={LogoHeader} alt="Logo do site" />
        </div>
        <SearchBar
          placeholder='Pesquisar filme...'
        />
        <div className='container-menu-header'>
          <ul className='menu-header'>
            <li>
              <a href="#">programação</a>
              <div className='sub-menu-header'>
                <a href="#"></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header