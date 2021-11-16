import styled from 'styled-components';
const AboutUs = () => {
    return ( 
        <Container>
            <Wrapper>
            <Header>
            About Me...
            </Header>
            <Content>
            Barely 2 Months into learning how to code using JavaScript.
            </Content>
            <Content>
            Training to become a professional Frontend Developer (So help Me God!).
            </Content>
            <Content>
            Training is been sponsored by LSETF and USADF.
            </Content>
            </Wrapper>
            </Container>
     );
}
 
export default AboutUs;
const Container = styled.div`

`;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
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