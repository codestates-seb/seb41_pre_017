import styled from "styled-components";
import ContentLoginButtons from "./ContentLoginButtons";
import ContentLogInForm from "./ContentLogInForm";
import {Link} from "react-router-dom";

const QuestionLoginContainer = styled.div`
  position: relative;
  padding: 0 !important;
  margin-top: 16px;
  margin-bottom: 16px;

  .flexing {
    display: flex;
    margin: 1px;
  }
`;

const AnswerLoginButtons = styled.div`
  margin: 8px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ButtonTitle = styled.h3`
  font-weight: 400;
  margin-left: 0;
  margin-right: 0;
  margin: 4px;
  font-size: 1.3rem;
  line-height: 1.3;
  
  span {
    color: #0074CC;
  }
`;

const AnswerContainer = styled.div`
  margin: 8px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const SignUpTitle = styled.h3`
  font-weight: 400;
  margin-left: 0;
  margin-right: 0;
  margin: 4px;
  font-size: 1.3rem;
  line-height: 1.3;
`;

const ContentLogin = () => {
    return (
        <QuestionLoginContainer>
            <div className={'flexing'}>
                <AnswerLoginButtons>
                    <ButtonTitle>Sign up or
                        <Link to={'../../users/login'}>
                            <span> log in</span>
                        </Link>
                    </ButtonTitle>
                    <ContentLoginButtons/>
                </AnswerLoginButtons>
                <AnswerContainer>
                    <SignUpTitle>Post as a guest</SignUpTitle>
                    <ContentLogInForm/>
                </AnswerContainer>
            </div>
        </QuestionLoginContainer>
    )
};

export default ContentLogin;