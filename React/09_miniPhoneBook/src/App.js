import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm'
import ContactList from './component/ContactList'
// 왼쪽 - 연락처 입력 폼
// 오른쪽 - 상단 검색창, 하단 연락처리스트
// 리스트 - 이름과 연락처 저장 가능 / 연락처 갯수 카운트 /
// 검색 -  이름으로 검색

function App() {
  return (
    <>
    <h1>테스트</h1>
    <Container>
      <Row className='box'>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <ContactList />
        </Col>
      </Row>
    </Container>
      
    </>
  );
}

export default App;
