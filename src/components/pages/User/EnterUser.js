import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnterUser = ({ onSaveData }) => {

  const [form, setForm] = useState({
    name: '',
    age: '',
    sex: '',
    birth: '',
    height: '',
    weight: '',
    regDate: '',
    endDate: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value
  })
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  onSaveData(form)
  console.log(form);
  setForm({ //초기화
    name: '',
    age: '',
    sex: '',
    birth: '',
    height: '',
    weight: '',
    regDate: '',
    endDate: '',
    phone: '',
    email: '',
  })
  }

  return (

    <Form onSubmit={handleSubmit}>
        <h1>신규 회원 등록</h1>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label htmlFor='username'>이름</Form.Label>
          <Form.Control type="name" placeholder="Enter name" value={form.name} onChange={handleChange}/>
        </Form.Group>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridBirth">
          <Form.Label htmlFor='birth'>생년월일</Form.Label>
          <Form.Control placeholder="Enter birth" value={form.birth} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSex">
          <Form.Label htmlFor='sex'>성별</Form.Label>
          <Form.Select value={form.sex} onChange={handleChange} defaultValue="선택">
            <option>남</option>
            <option>여</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridWeight">
          <Form.Label htmlFor='weight'>체중</Form.Label>
          <Form.Control type="weight" placeholder="Enter weight" value={form.weight} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridHeight">
          <Form.Label htmlFor='height'>키</Form.Label>
          <Form.Control type="height" placeholder="Enter height" value={form.height} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridWeight">
          <Form.Label htmlFor='phone'>연락처</Form.Label>
          <Form.Control type="phone" placeholder="Enter phone number" value={form.phone} onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridHeight">
          <Form.Label htmlFor='email'>이메일</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridStartDay">
        <Form.Label htmlFor='regDate'>등록일</Form.Label>
        <Form.Control placeholder="2022.01.01" value={form.regDate} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridEndDay">
        <Form.Label htmlFor='endDate'>종료일</Form.Label>
        <Form.Control placeholder="2023.01.01" value={form.endDate} onChange={handleChange} />
      </Form.Group>


      <Button variant="primary" type="submit">
        등록
      </Button>
    </Form>
  );
}

export default EnterUser;