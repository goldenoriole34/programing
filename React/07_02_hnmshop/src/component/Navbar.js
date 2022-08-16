import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuList = ['여성', '남성', '아동', '노인', '애견', '기타', '할인', '이벤트']
  return (
    <div>
      <div className='login-button'>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className='nav-section'>
        <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'></img>
      </div>
      <div className='menu-area'>
          <ul className='menu-list'>
              {menuList.map((menu) => (
                <li>{menu}</li>
              ))}
          </ul>
          <div className='searchbar'>
            <FontAwesomeIcon className='search-icon' icon={faSearch} />
            <input type={"text"}></input>
          </div>
      </div>
    </div>
  )
}

export default Navbar
