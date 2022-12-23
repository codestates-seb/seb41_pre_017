import styled from "styled-components";
import SignUpButtons from "../users/SignUp/SignUpButtons";
import SignUpForm from "../users/SignUp/SignUpForm";

const SignUpContainer = styled.div`
  flex-shrink: 0;
  box-sizing: inherit;
  max-width: calc(calc(97rem / 12) * 3);
`;

const SignUpBox = () => {
    return (
        <SignUpContainer>
            <SignUpButtons/>
            <SignUpForm/>
        </SignUpContainer>
    )
};

export default SignUpBox;