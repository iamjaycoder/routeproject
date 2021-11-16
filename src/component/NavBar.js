import styled from 'styled-components';
import {FaHome} from 'react-icons/fa';
import img from '../assets/logo.png';
import {AiFillContacts} from 'react-icons/ai';
import {BsFillFilePersonFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';




const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const  HandleMenu = () => {
        setToggle(!toggle)
    }
    const closeMenu = () => {
        setToggle(false);
    }
    return ( 
       <Container>
           <Wrapper>
               <Logo src={img} />
               <MobileMenu onClick={HandleMenu} >
                  {toggle ? <FaTimes/> : <FaBars/> }
               </MobileMenu>
               <Navigation toggle={toggle} onClick={closeMenu}>
          <Nav to="/" onClick={closeMenu}>
              <Icon>
                  <FaHome/>
              </Icon>
              <span>Home</span>
          </Nav>
          <Nav to="/about me" onClick={closeMenu}>
              <Icon>
                  <BsFillFilePersonFill/>
              </Icon>
              <span>About Me</span>
          </Nav>
          <Nav to="/contact" onClick={closeMenu}>
              <Icon>
                  <AiFillContacts/>
              </Icon>
              <span>Contact</span>
          </Nav>
          </Navigation>
        
         <Space/>

         <ContentHolder>
             <Button>
                 Login
             </Button>
         </ContentHolder>
          
           </Wrapper>
           <Wrapper2></Wrapper2>
       </Container> 
       
    );
}
 
export default NavBar;

const Navigation = styled.div`

display: flex;

@media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 80px;
    background: white;
    left: ${({toggle}) => (toggle ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    transition: all 350ms ease-in-out
}

`

const MobileMenu = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    right:20px;
    font-size: 30px;

}
`;

const Space = styled.div`
flex: 1;
`;
const ContentHolder = styled.div`
margin-right: 20px;

@media screen and (max-width: 768px){
    display: none;
}
`;
const Button = styled.div`
color: #551A8B;
transition: all 350ms;
border-radius: 5px;
font-weight: bold;
padding: 5px;
font-size: 18px;
transform: scale(1);

: hover {
    cursor: pointer;
    transform: scale(0.96);
    //background: linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));
    border-radius: 5px;
    color: #F4AADA;
    box-shadow: 3px 8px 8px 5px #353535;

   
}
`;

const Wrapper2 = styled.div`
width: 100%;
min-height: 100vh;
background: linear-gradient(to top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));
`;
const Container = styled.div`
width: 100%;
height: 80px;
background: linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248));
`;
const Wrapper = styled.div`
width: 100%;
height: 80px;
display: flex;
align-items: center;

`;
const Nav = styled(Link)`
display: flex;
align-items: center;
padding: 5px;
margin: 20px;
text-decoration: none;
transform: scale(1);
transition: all 350ms;

@media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    margin: 30px;

}



span {
    font-weight: bold;
}
: hover {
    cursor: pointer;
    transform: scale(0.96);
    //border-radius: 5px;
    box-shadow: 3px 8px 8px 5px #353535;
}
`;
const Icon = styled.div`
margin-right: 5px;
`;
const Logo = styled.img`
width: 80px;
height; 80px;
margin-right: 30px;
`;