import styled from "styled-components";
import BlueBtn from "../../component/blueBtn";
import {Fragment} from "react";

const FromContainer = styled.div`
  max-width: calc(calc(97rem / 12) * 3);
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 7px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 0;
  margin-left: 0;
  margin: -6px;

  .auth-item {
    display: flex;
    flex-direction: column;
    margin: 6px;
    margin-right: 0;
    margin-left: 0;
  }

  label {
    margin: 2px;
    margin-right: 0;
    margin-left: 0;
    cursor: pointer;
    font-size: 1.15rem;
    color: hsl(210, 8%, 5%);
    font-weight: 600;
    padding: 0 2px;
  }

  p {
    color: hsl(210, 8%, 45%);
    font-size: 12px;
    margin-bottom: 4px;
    margin-top: 4px;
    clear: both;
  }
`;

const InputBox = styled.div`
  margin-right: 0;
  margin-left: 0;
  margin: 2px;
  position: relative;
  display: flex;

  input {
    width: 100%;
    margin: 0;
    padding: 0.6em 0.7em;
    border: 1px solid hsl(210, 8%, 75%);
    border-radius: 3px;
    background-color: white;
    color: hsl(210, 8%, 5%);
    font-size: 13px;
  }
`;

const ButtonBox = styled.div`
  margin-right: 0;
  margin-left: 0;
  margin: 6px;
  display: flex;
  flex-direction: column;

  .caption {
    text-align: left;
    color: hsl(210, 8%, 45%);
    font-size: 12px;
    margin-top: 32px;
  }

  .caption a {
    color: #0074CC;
  }
`;

const PolicyMessage = (
    <Fragment>
        <span>By clicking “Sign up”, you agree to our </span>
        <a
            href="https://stackoverflow.com/legal/terms-of-service/public"
            name="tos">
            terms of service
        </a>
        <span> , </span>
        <a
            href="https://stackoverflow.com/legal/privacy-policy"
            name="privacy">
            privacy policy
        </a>
        <span> and </span>
        <a
            href="https://stackoverflow.com/legal/cookie-policy"
            name="cookie">
            cookie policy
        </a>
    </Fragment>
)

const SignUpForm = () => {
    return (
        <FromContainer>
            <Form>
                <div className={'auth-item'}>
                    <label htmlFor={'display-name'}>Display name</label>
                    <InputBox>
                        <input type={'text'} id={'display-name'} name={'display-name'}/>
                    </InputBox>
                </div>
                <div className={'auth-item'}>
                    <label htmlFor={'email'}>Email</label>
                    <InputBox>
                        <input type={'email'} id={'email'} name={'email'}/>
                    </InputBox>
                </div>
                <div className={'auth-item'}>
                    <label htmlFor={'password'}>Password</label>
                    <InputBox>
                        <input type={'password'} id={'password'} name={'password'}/>
                    </InputBox>
                    <p className={'caption'}>
                        Passwords must contain at least eight characters, including at least 1 letter and 1 number.
                    </p>
                </div>
                <ButtonBox>
                    <BlueBtn>Sign up</BlueBtn>
                    <div className={'caption'}>
                        {PolicyMessage}
                    </div>
                </ButtonBox>
            </Form>
        </FromContainer>
    )
};

export default SignUpForm;