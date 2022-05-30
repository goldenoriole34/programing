import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const menuList = ['남성', '여성', '아동', '시니어', '악세서리', '잡화', '기타']
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')  
  }
  const search = (e) => {
    if(e.key === "Enter") {
      let keyward = e.target.value
      navigate(`/?q=${keyward}`)
    }
  }

  return (
    <>
      <div className='login-button'>
        <FontAwesomeIcon icon={faUser} />
        <div className='login-font' onClick={goToLogin}>로그인</div>
      </div>
      <div className='logo-img'>
        <img width="150px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png'></img>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu)=>{
            return <li>{menu}</li>
          })}
        </ul>
        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(e)=>{search(e)}} />
        </div>
      </div>

    </>
  )
}

export default NavBar