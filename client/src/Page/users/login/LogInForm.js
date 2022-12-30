import styled from 'styled-components';
import BlueBtn from '../../components/style/blueBtn';

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
`;

const InputContainMessage = styled.div`
    margin-right: 0;
    margin-left: 0;
    margin: 2px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        text-decoration: none;
        color: hsl(206, 100%, 40%);
        cursor: pointer;
        user-select: auto;
        font-size: 12px;
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
`;

const LogInForm = () => {
    return (
        <FromContainer>
            <Form>
                <div className={'auth-item'}>
                    <label htmlFor={'email'}>Email</label>
                    <InputBox>
                        <input type={'email'} id={'email'} name={'email'} />
                    </InputBox>
                </div>
                <div className={'auth-item'}>
                    <InputContainMessage>
                        <label htmlFor={'password'}>Password</label>
                        <span>Forgot password?</span>
                    </InputContainMessage>
                    <InputBox>
                        <input type={'password'} id={'password'} name={'password'} />
                    </InputBox>
                </div>
                <ButtonBox>
                    <BlueBtn>Log In</BlueBtn>
                </ButtonBox>
            </Form>
        </FromContainer>
    );
};

export default LogInForm;
