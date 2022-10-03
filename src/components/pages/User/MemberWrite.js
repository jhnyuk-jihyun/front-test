import React, { useEffect, useState, useRef } from "react";
import Post from "./Post";

const MemberWrite = ({ onSaveData }) => {
    const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  const nextId = useRef(1);


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

    return (
        <Post onSaveData={handleSave} />
    )
}

export default MemberWrite;