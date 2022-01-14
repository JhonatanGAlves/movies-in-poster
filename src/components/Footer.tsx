import React from 'react'
import LogoFooter from '../assets/images/logo.svg'

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='box-footer'>
        <div className='logo-footer'>
          <img src={LogoFooter} alt="Logo do rodapé" />
        </div>
        <div className='text-footer'>
          <p className='quote-footer'>"Num filme o que importa não é a realidade, <br />
            mas o que dela possa extrair a imaginação."
          </p>
          <p>Charles Chaplin</p>
        </div>
      </div>
      <div className='rights-reserved-footer'>
        <p>	&copy; Direitos reservados | Desenvolvido por J.G - Tech</p>
      </div>
    </div>
  )
}

export default Footer