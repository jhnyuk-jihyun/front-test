import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = ({ onSaveData }) => {
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
        <div>
            <div className='text-xl font-bold mt-5 mb-2 text-center'>신규 회원 등록</div>
            <form className="mt-3" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row mb-1">
                    <label htmlFor="username" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">이름
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='이름을 입력해주세요' type='text' name='name' 
                            value={form.name} onChange={handleChange} />
                    </label>
                    <label htmlFor="age" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">나이
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='나이를 입력해주세요' type='text' name='age' 
                            value={form.age} onChange={handleChange} />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row mb-1">
                    <label htmlFor="sex" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">성별
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='성별을 입력해주세요' type='text' name='sex' 
                            value={form.sex} onChange={handleChange} />
                    </label>
                    <label htmlFor="birth" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">생년월일
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='생년월일을 입력해주세요' type='text' name='birth' 
                            value={form.birth} onChange={handleChange} />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row mb-1">
                    <label htmlFor="height" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">키
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='키를 입력해주세요' type='text' name='height' 
                            value={form.height} onChange={handleChange} />
                    </label>
                    <label htmlFor="weight" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">체중
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='체중을 입력해주세요' type='text' name='weight' 
                            value={form.weight} onChange={handleChange} />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row mb-1">
                    <label htmlFor="regDate" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">등록일
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='등록일을 입력해주세요' type='text' name='regDate' 
                            value={form.regDate} onChange={handleChange} />
                    </label>
                    <label htmlFor="endDate" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">종료일
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='이메일 주소를 입력해주세요' type='text' name='endDate' 
                            value={form.endDate} onChange={handleChange} />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row">
                    <label htmlFor="phone" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">연락처
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='핸드폰 번호를 입력해주세요' type='text' name='phone' 
                            value={form.phone} onChange={handleChange} />
                    </label>
                    <label htmlFor="email" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">이메일
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='이메일을 입력해주세요' type='email' name='email' 
                            value={form.email} onChange={handleChange} />
                    </label>
                </div>
                <div className='text-center'>
                    <button className='on bg-blue-400 py-2 text-center px-10 md:px-12 md:py-3 
                    rounded text-xl md:text-base mt-4' type='submit' onClick={() => document.location.href = '/MemberList'} >등록</button>
                </div>
            </form>
        </div>
    );
};

export default Post;