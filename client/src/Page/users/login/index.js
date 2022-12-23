import styled from "styled-components";
import SignUpBox from "../../component/SignUpBox";

const Wrapper = styled.div`
  max-width: 100%;
  justify-content: center;
  margin: 0;
  background-color: hsl(210, 8%, 95%);
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vw;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0;
  background-color: transparent;
  border-left: 0;
  border-right: 0;
  box-sizing: border-box;
  border-radius: 0;
  //border: 1px solid hsl(210, 8%, 85%);
  border-top-width: 0;
  border-bottom-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Login = () => {
    return (
        <Wrapper>
            <Content>
                <Container>
                    <SignUpBox/>
                </Container>
            </Content>
        </Wrapper>
    );
};

export default Login;
