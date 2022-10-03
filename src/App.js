import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from './components/Layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layouts/Layout';
import EnterUser from './components/pages/User/EnterUser';
import UserList from './components/pages/QnA/UserList';
import QnABoard from './components/pages/QnA/QnABoard';
import MemberList from './components/pages/User/MemberList';
import MemberWrite from './components/pages/User/MemberWrite';
import QnAList from './components/pages/QnA/QnAList';
import Inbody from './components/pages/Inbody';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Container style={{ minHeight: "80vh", marginTop: "50px" }}>
          <Routes>
            <Route exact path='/MemberList' element={<MemberList />}></Route>
            <Route exact path='/MemberWrite' element={<MemberWrite />}></Route>
            <Route exact path='/' element={<QnABoard />}></Route>
            <Route exact path='/UserList' element={<UserList />}></Route>
            <Route exact path='/EnterUser' element={<EnterUser />}></Route>
            <Route exact path='/QnAList' element={<QnAList />}></Route>
            <Route exact path='/Inbody' element={<Inbody />}></Route>

            
            </Routes>
          </Container>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
