import React, { useState, useEffect } from 'react'
import './styles.css'
import LogoHeader from '../assets/images/logo.svg'
import SearchBar from './SearchBar/SearchBar'

const Header = (props: any) => {
  return (
    <div className='container-header'>
      <div className='box-header'>
        <div className='container-logo-header'>
          <img src={LogoHeader} alt="Logo do site" />
        </div>
        <SearchBar
          className='search-movie'
          placeholder='Pesquisar filme...'
        />
        <div className='container-menu-header'>
          <ul className='menu-header'>
            <li className='menu-dropdown'>
              <a href="#">programação</a>
              <ul className='sub-menu-header'>
                <li>
                  <a href="#">em cartaz</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header