import styled from "styled-components";

import SignUpButtons from "./SignUpButtons";
import SignUpForm from "./SignUpForm";

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