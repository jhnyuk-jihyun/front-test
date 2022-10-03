import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function QnAView () {
    return(
      <div>
        <h3>식단 질문</h3>
        <p>작성자: 김동양</p>
        <p>등록일: 2022.01.01</p>
        <br/>
        <p>다이어트 중인데 간헐적 단식으로 일반식 먹어도 되나요?</p>
        
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="답변 입력"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          등록
        </Button>
      </InputGroup>
      </div>

    )
}

export default QnAView;