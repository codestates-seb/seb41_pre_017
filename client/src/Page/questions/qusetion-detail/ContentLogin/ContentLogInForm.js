import {useRef} from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin: 8px 0 0 0;

  .authItem {
    display: flex;
    flex-direction: column !important;
    margin: 1px;

    label {
      cursor: pointer;
      font-size: 1rem;
      color: hsl(210, 8 %, 5 %);
      font-weight: 600;
      padding: 0 2px;
    }
  }
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  
  input {
    width: 100%;
    margin: 10px 0;
    padding: 1em;
    border: 1px solid hsl(210, 8%, 45%);
    border-radius: 3px;
    background-color: white;
    color: hsl(210, 8 %, 5 %);
    font-size: 12px;
  }
`;

const ContentLogInForm = () => {
    const emailRef = useRef();
    const nameRef = useRef();

    return (
        <FormContainer>
            <div className={'auth-item'}>
                <label htmlFor={'name'}>Name</label>
                <InputBox>
                    <input type={'text'} id={'name'} ref={nameRef}/>
                </InputBox>
            </div>
            <div className={'auth-item'}>
                <label htmlFor={'email'}>Email</label>
                <InputBox>
                    <input type={'email'} id={'email'} ref={emailRef}/>
                </InputBox>
            </div>
        </FormContainer>
    )
};

export default ContentLogInForm;