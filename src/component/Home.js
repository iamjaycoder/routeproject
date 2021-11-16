import styled from 'styled-components';

const Home = () => {
    return ( 
        <Container>
            <Wrapper>
                <Header>
                Welcome To My React-Routing Tutorial!
                </Header>
                <Content>
                In this short tutorial, I will be showing you how I use the dependency "react-router-dom",
to route multiple pages in React.
                </Content>
                <Content>
                To follow along, install "react-router-dom" into your project.
                </Content>
                <Content>
                How to install: npm i react-router-dom@^5 
                </Content>
                <Content>
                Happy Watching!!!
                </Content>
            </Wrapper>
        </Container>
     );
}
 
export default Home;
const Content = styled.div`
color: lightgray;
margin-top: 30px;
font-size: 25px;
`;

const Container = styled.div`

`;
const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;


`;
const Header = styled.div`
color: lightgray;
margin-top: 20px;
font-size: 50px;
font-weight: bold;
`;