import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {

  const menuList = ['여성', '남성', '아동', '신발', '가방', '기타', '커뮤니티'];

  return (
    <>
      <nav className='login-button'>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </nav>
      <div className='nav-section'>
        <img width={100}
        src='https://littledeep.com/wp-content/uploads/2020/06/nike_logo_thumbnail.png'
        />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      
        <div>
            <FontAwesomeIcon icon={faSearch} />
            <input />
        </div>
      </div>
    </>
  )
}
