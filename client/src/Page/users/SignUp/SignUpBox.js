import styled from "styled-components";

import SignUpButtons from "./SignUpButtons";
import SignUpForm from "./SignUpForm";

const SignUpContainer = styled.div`
  flex-shrink: 0;
  box-sizing: inherit;
  max-width: calc(calc(97rem / 12) * 3);
`;

const MinimizedSignUpMessage = styled.div`
  max-width: calc(calc(97rem / 12) * 4);
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    line-height: 1;
    font-size: 1.5rem;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 816px) {
    display: block;
  }

  @media screen and (min-width: 816px) {
    display: none;
  }
`;

const SignUpBox = () => {
    return (
        <SignUpContainer>
            <MinimizedSignUpMessage>
                <h1>Create your Stack Overflow account. It’s free and only takes a minute.</h1>
            </MinimizedSignUpMessage>
            <SignUpButtons/>
            <SignUpForm/>
        </SignUpContainer>
    )
};

export default SignUpBox;