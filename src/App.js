
import { Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import Board from './pages/Board';
import {useNavigate} from 'react-router-dom'
import { ButtonGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
  라우팅 기능을 사용해보자!
  - 라우팅 (Routing) : 사용자가 요청한 URL에 따라 그에 적합한 페이지를 보여주는 것
  - ex) 사용자 "메인페이지 보여줘!" <- Login Page 제공
  ====> 이러한 과정을 Routing 이라고 한다.
  - 리액트는 Single Page Application임, 여러개의 페이지를 사용하는 라이브러리가 아님
  - 신규 페이지를 불러 오는 것이 아니라, 하나의 페이지에서 내가 필요한 데이터만 가져와서 교체
  
  - 우리는 'React-Router-Dom'을 사용

  1) 설치 : npm install react-router-dom
  
  2) BrowserRouter import 
    - 사용자가 입력한 주소를 감지하는 역할
  npm start

  3) 설치를 해도 오른쪼과 같은 오류가 뜨면
  설치 덜된거임 다시 Ctrl + C 하고 위작업 반복

  3) Routes - Route
  3-1) Routes : 여러 경로 (Route)를 감싸서,
      하위 경로 중 조건에 맞는 경로 하나만 렌더링해주는 역할
      ex) 
        클라이언트 "나 A페이지 줘"
        Routes : "ㅇㅋ A 페이지 여기있어 (Route)"
        클라이언트 "나 B페이지 줘"
        Routes : "ㅇㅋ B 페이지 여깄다 (Route)"
        과거에는 Switch라는 문법의 이름으로 사용이 되었음
        리액트가 업데이트 되어서 이름이 Routers로 변경된 것!

  3-2) Route : 경로
        - 필수 속성이 2가지 (path, element)
        - path (경로) : 사용자가 이렇게 요청을 했을 때~
        - element (컴포넌트) : 이 컴포넌트를 보여주세요~

*/


function App() {

const nav = useNavigate()

  return (
    <div className="App">
      
       <h1>Welcome to React Router</h1>
      <div>
      <ButtonGroup aria-label="Basic example">
      <Button variant="warning" onClick={() => {nav('/')}}>Main</Button>
      <Button variant="warning" onClick={() => {nav('/board')}}>Board</Button>
      <Button variant="warning" onClick={() => {nav('/detail')}}>Detail</Button>
      <Button variant="warning" onClick={() => {nav('/login')}}>Login</Button>
      <Button variant="warning" onClick={() => {nav('/about')}}>About</Button>
      </ButtonGroup>
      </div>
   
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/detail/:num' element={<Detail/>}/>
        <Route path='/board' element={<Board/>}/>
        {/* notFound페이지는 우리가 설정해둔 path 이외
        에 모든 페이지에서 떠야한다. */}
    </Routes>     
  
  </div>
  );
}

export default App;
