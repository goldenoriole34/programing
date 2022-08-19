import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', '남성', '아동', '노인', '애견', '기타', '할인', '이벤트']

    const navigate = useNavigate()

    const goToLogin = () => {
      navigate('/login')
    }

    const search = (event) => {
      if(event.key == "Enter") {
      }
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }

    const goToMain = () => {
      navigate("/")
    }

  return (
    <div>
      <div className='login-button' onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        {authenticate == false ? "로그인" : "로그아웃"}
      </div>
      <a className='nav-section' onClick={goToMain}>
        <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'></img>
      </a>
      <div className='menu-area'>
          <ul className='menu-list'>
              {menuList.map((menu) => (
                <li>{menu}</li>
              ))}
          </ul>
          <div className='searchbar'>
            <FontAwesomeIcon className='search-icon' icon={faSearch} />
            <input type={"text"} onKeyPress={(event) => search(event)} />
          </div>
      </div>
    </div>
  )
}

export default Navbar
