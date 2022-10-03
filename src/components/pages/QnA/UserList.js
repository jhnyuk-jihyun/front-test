/* eslint-disable jsx-a11y/anchor-is-valid */
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnterUser from '../User/EnterUser';
import { Link } from 'react-router-dom';

const enterUser = () => {
  document.location.href('/EnterUser')
}



function QnABoard() {
  return (

    <>
    <div>
      <h2>QnA</h2>
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          검색
        </Button>
      </InputGroup>
    </div>
    <br></br>    <br></br>
        <div align="right">
    <Link to="./target/location/EnterUser.js">
      <Button variant="secondary" onClick={() => document.location.href = `/EnterUser`}>글 등록</Button>
    </Link>
    </div>
    <br></br>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일</th>
          <th>답변</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><Link to="/QnAView">식단 질문</Link></td>
          <td>김동양</td>
          <td>2022.01.01</td>
          <td>o</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>2</td>
          <td><a href=''>식단 질문</a></td>
          <td>김동양</td>
          <td>2022.01.01</td>
          <td>o</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>3</td>
          <td><a href=''>식단 질문</a></td>
          <td>김동양</td>
          <td>2022.01.01</td>
          <td>o</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>4</td>
          <td><a href=''>식단 질문</a></td>
          <td>김동양</td>
          <td>2022.01.01</td>
          <td>o</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>5</td>
          <td><a href=''>식단 질문</a></td>
          <td>김동양</td>
          <td>2022.01.01</td>
          <td>o</td>
        </tr>
      </tbody>

    </Table>
    </>
  );
}

export default QnABoard;