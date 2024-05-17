import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../../img/logo.png';

export function NavbarMain() {
    return (
        <>
         <Navbar className="custom-bg-black">
            <Container fluid>
            {/* Левая часть с логотипом и названием */}
            <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
                <span className="text-light">ITEVO</span>
            </Navbar.Brand>

            {/* Центральная часть с меню */}
            <Nav className="justify-content-center">
            <Nav.Link className="text-light" href="#home">Главная</Nav.Link> {/* Применяем класс text-light */}
                    <Nav.Link className="text-light" href="#features">О нас</Nav.Link> {/* Применяем класс text-light */}
                    <Nav.Link className="text-light" href="#pricing">Услуги</Nav.Link> {/* Применяем класс text-light */}
                    <Nav.Link className="text-light" href="#contact">Контакты</Nav.Link> {/* Применяем класс text-light */}
            </Nav>

            {/* Правая часть с названием пользователя и иконкой */}
            <Nav className="justify-content-end"> {/* Добавьте управление содержимым */}
                    <Navbar.Text className="text-light">
                        Пользователь: Имя Фамилия
                    </Navbar.Text>
                    <Nav.Link href="#userIcon">
                        <i className="fas fa-user text-light"></i> {/* Применяем класс text-light */}
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}