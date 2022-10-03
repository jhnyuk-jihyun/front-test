/* QnA 글 목록 보여주는 상위(부모) 컴포넌트 table, Board */
import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { height } from "@mui/system";


const MemberList = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(1);

//더미 데이터 호출
/*
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }, []);
*/
  const handleSave = (data) => {
    //데이터 수정하기
    if (data.id) { //수정 데이터에는 id가 존재
      setInfo(
        info.map(row => data.id === row.id ? {
            id: data.id,
            name: data.name,
            age: data.age,
            sex: data.sex,
            birth: data.birth,
            height: data.height,
            weight: data.weight,
            regDate: data.regDate,
            endDate: data.endDate,
            phone: data.phone,
            email: data.email,
        } : row))

    } else { 

      //데이터 추가하기
      setInfo(info => info.concat(
        {
        id: nextId.current,
        name: data.name,
        age: data.age,
        sex: data.sex,
        birth: data.birth,
        height: data.height,
        weight: data.weight,
        regDate: data.regDate,
        endDate: data.endDate,
        phone: data.phone,
        email: data.email,
        }
      ))
      nextId.current += 1;
    }
  }

  const handleRemove = (id) => {
    setInfo(info => info.filter(item => item.id !== id));
  }

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
        id: item.id,
        name: item.name,
        age: item.age,
        sex: item.sex,
        birth: item.birth,
        height: item.height,
        weight: item.weight,
        regDate: item.regDate,
        endDate: item.endDate,
        phone: item.phone,
        email: item.email,
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  }

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  }

  return (
    
    <div className="container max-w-screen-lg mx-auto">
        <script src="https://use.fontawesome.com/your-embed-code.js"></script>
      <Stack  gap={3}>
        <h3>회원 조회</h3>
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
      
      </Stack>
      <h5>회원 목록</h5>
      <div align="right">
    <Link to="./target/location/EnterUser.js">
      <Button variant="secondary" onClick={() => document.location.href = `/MemberWrite`}>신규 회원 등록</Button>
    </Link>
    </div>
    <br></br>

      <table className="min-w-full table-auto text-gray-800">
        <thead className='justify-between'>
          <tr className='bg-gray-800'>
            <th className="text-gray-300 px-4 py-3">No.</th>
            <th className="text-gray-300 px-4 py-3">이름</th>
            <th className="text-gray-300 px-4 py-3">나이</th>
            <th className="text-gray-300 px-4 py-3">성별</th>
            <th className="text-gray-300 px-4 py-3">연락처</th>
            <th className="text-gray-300 px-4 py-3">등록일</th>
            <th className="text-gray-300 px-4 py-3">종료일</th>
            <th className="text-gray-300 px-4 py-3">수정</th>
            <th className="text-gray-300 px-4 py-3">삭제</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
      </table>
      
      {modalOn && <Modal selectedData={selected} handleCancel={handleCancel} 
      handleEditSubmit={handleEditSubmit} />}
    </div>
  );
};

export default MemberList;