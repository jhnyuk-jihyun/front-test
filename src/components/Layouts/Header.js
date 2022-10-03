import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";


function Header(props) {
  return (
    <header>
        <Navbar id="Navbar" bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <Nav.Link href="/">EL-Trainer</Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/MemberList">회원목록</Nav.Link>
                                <Nav.Link href="/EnterUser">신규회원</Nav.Link>
                                <Nav.Link href="/QnAList">QnA</Nav.Link>
                                <Nav.Link href="/Inbody">인바디</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link>
                                    <Button variant="outline-dark" className="rounded-pill" >
                                        로그인
                                    </Button>
                                </Nav.Link>
                                <Nav.Link>
                                    <Button variant="outline-dark" className="rounded-pill" >
                                        회원가입
                                    </Button>
                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    </header>
  );
}

export default Header;
