/* QnA 글 목록 보여주는 상위(부모) 컴포넌트 table, Board */
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const QnAList = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(11);

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
          email: data.email,
          phone: data.phone,
          website: data.website,
        } : row))

    } else { //바로 추가하기
      // 데이터 추가하기 방법1
      // setInfo((prev) => {
      //   return [ ...prev, {
      //     id: nextId.current,
      //     name: data.name,
      //     email: data.email,
      //     phone: data.phone,
      //     website: data.website
      //   }]
      // });

      //데이터 추가하기 방법2
      setInfo(info => info.concat(
        {
          id: nextId.current,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website
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
      email: item.email,
      phone: item.phone,
      website: item.website
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
      <Stack direction="horizontal" gap={3}>
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
      
      </Stack>
      <div className='text-xl font-bold mt-5 mb-3 text-left'>글 목록</div>
      <table className="min-w-full table-auto text-gray-800">
        <thead className='justify-between'>
          <tr className='bg-gray-800'>
            <th className="text-gray-300 px-4 py-3">No.</th>
            <th className="text-gray-300 px-4 py-3">제목</th>
            <th className="text-gray-300 px-4 py-3">작성자</th>
            <th className="text-gray-300 px-4 py-3">등록일</th>
            <th className="text-gray-300 px-4 py-3">답변</th>
            <th className="text-gray-300 px-4 py-3">Edit</th>
            <th className="text-gray-300 px-4 py-3">Delete</th>
          </tr>
        </thead>
        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
      </table>
      <Post onSaveData={handleSave} />
      {modalOn && <Modal selectedData={selected} handleCancel={handleCancel} 
      handleEditSubmit={handleEditSubmit} />}
    </div>
  );
};

/*
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const cellList=['번호','프로필 이미지','이름','생년월일','성별',];

function QnAList () {
    return (
        <Table>
          <TableHead>
            <TableRow>
              {cellList.map(c=><TableCell>{c}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c=><Customer />)}
          </TableBody>
        </Table>
      )
}
*/
export default QnAList;