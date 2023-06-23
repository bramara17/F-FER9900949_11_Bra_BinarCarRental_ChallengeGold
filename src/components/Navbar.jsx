import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../index.css';

const Navbarr = ({menu}) =>{
    return(
        <div className='bannerColor'>
            <Container>
                <div className='navbarCustom'>
                    <p className='logoNavbar'></p>
                    <a className='menuCustom'>{menu.map((item) => (
                        <Nav>
                            <Nav.Link className='menuCustom' href="/cars">
                                {item}
                            </Nav.Link>
                        </Nav>
                        ))}
                    </a>
                </div>
            </Container>
        </div>
    )
}

export default Navbarr;