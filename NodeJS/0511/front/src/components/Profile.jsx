const Profile = ({ onClick }) => {

  const handleClick = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    <div>
      <h2>회원정보</h2>
      xxx님 환영합니다. <a href="#" onClick={handleClick}>로그아웃</a>
    </div>
  )
}

export default Profile