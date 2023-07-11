import React from 'react'
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
  
    const nav = useNavigate()
    let auth = false
    //회원정보

    const goToMain = () => {
        console.log('go to Main Function')
        auth ? nav('/') : nav('/login')
        
    }
    /*
    만약 우리 유저라면 메인페이지로 이동
    우리 유저가 아니라면 로그인페이지로 이동

    useNavigae
    - 페이지 이동을 도와주는 리액트 훅
    
    useNavigate
    - 페이지 이동을 도와주는 리액트 훅

    1) import {useNavigate} from 'react-router-dom'
    2) const 변수 = useNavigate()
    3) 페이지 이동을 해야할 때, 변수("경로")
    ex) const nav = useNavigate()
        nav('/login')
        
        
        1. pages 안에 여러 컴포넌트들을 새로 만들기
         - NotFound.jsx
         - Board.jsx
         - Detail.jsx
        2. 경로를 지정
         - /notfound => NotFound.jsx
         - /board => Board.jsx
         - /detail => Detail.jsx
        3. Main, Login, About, NotFound, Board, Detail 페이지
         각각 클릭하면 그 페이지로 이동하는 상당바 생성
         단, 어느 페이지를 가든 그 상단바가 존재 (루트 안에 안넣으면 됨)
  */
  
    return (
    <div>
        
        <h1>LoginPage</h1>
        <hr/>
        <button onClick={goToMain}>메인페이지(유저만 확인가능)</button>
    
    
    </div>
  )
}

export default LoginPage