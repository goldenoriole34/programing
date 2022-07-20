import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {

    const menuList = ['여성', 'Dvided', '남성', '신상/유아', '지속가능성']
  return (
    <>
        <div className='login-button'>
            <div><FontAwesomeIcon icon={faUser} /></div>
            <div>로그인</div>
        </div>
        <div className='nav-section'>
            <img
                width={100}
                src='https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/3e17273b-330d-4466-b158-d302aaa27d43'/>
        </div>
        <div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div></div>
        </div>
    </>
  )
}

export default Navbar