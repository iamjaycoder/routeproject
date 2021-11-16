import styled from 'styled-components';
import img from '../assets/twitter.png';
import Img from '../assets/instagram.png';

const Contact = () => {
    return ( 
        <Container>
            <Wrapper>
                <Header>
                Contact Me...
                </Header>
                <Content>
                Github: https://github.com/iamjaycoder
                </Content>
                <ContentHolder>
                <Logo src={img}/>
                <Content1>
                    jayvybzofficial
                </Content1>
                </ContentHolder>
                <ContentHolder1>
                <Logo src={Img}/>
                <Content2>
                    jayvybzofficial
                </Content2>
                </ContentHolder1>
            </Wrapper>
        </Container>
     );
}
 
export default Contact;
const ContentHolder = styled.div`
display: flex;
align-items: center;
`;
const ContentHolder1 = styled.div`
display: flex;
align-items: center;
`;

const Content1 = styled.div`
color: lightgray;
font-size: 20px;
`;
const Content2 = styled.div`
color: lightgray;
font-size: 20px;
`;

const Logo = styled.img`
width: 60px;
margin: 20px 10px;
`;

const Header = styled.div`
color: lightgray;
margin: 20px 10px;
font-size: 50px;
font-weight: bold;
`;
const Content = styled.div`
color: lightgray;
margin: 20px 10px;
font-size: 25px;

`;

const Container = styled.div`

`;
const Wrapper = styled.div`

`;