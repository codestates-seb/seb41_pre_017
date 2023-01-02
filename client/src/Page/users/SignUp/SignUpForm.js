import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Fragment, useCallback, useState } from 'react';
import axios from 'axios';
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

        .message {
            font-weight: 400;
            font-size: 0.8rem;
            line-height: 15px;
            letter-spacing: -1px;
            //position: absolute;
            bottom: -10px;
            left: 0;

            &.success {
                color: #0074cc;
            }

            &.error {
                color: #ff2727;
            }
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

        &:focus {
            &.wrong {
                outline: 1px solid red;
                box-shadow: 3px 3px 15px rgb(197 110 110), -3px -3px 15px rgb(197 110 110);
            }

            &.correct {
                outline: 1px solid #6bbbf7;
            }
        }
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
        color: #0074cc;
    }
`;

const LabelBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const PolicyMessage = (
    <Fragment>
        <span>By clicking “Sign up”, you agree to our </span>
        <a href="https://stackoverflow.com/legal/terms-of-service/public" name="tos">
            terms of service
        </a>
        <span> , </span>
        <a href="https://stackoverflow.com/legal/privacy-policy" name="privacy">
            privacy policy
        </a>
        <span> and </span>
        <a href="https://stackoverflow.com/legal/cookie-policy" name="cookie">
            cookie policy
        </a>
    </Fragment>
);

//회원가입 api 로 가입 데이터 보내기

const SignUpForm = () => {
    const navigate = useNavigate();

    //이름, 이메일, 비밀번호
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //오류 메세지
    const [nameMessage, setNameMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');

    //유효성 검사
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const signUpRequestHandler = useCallback(
        async (event) => {
            event.preventDefault();

            try {
                await axios
                    .post('http://ec2-52-78-166-35.ap-northeast-2.compute.amazonaws.com:8080/members', {
                        nickname: name,
                        email,
                        pwd: password,
                    })
                    .then((response) => {
                        console.log('login data sent successfully!!');
                        alert('회원가입이 완료되었습니다!');
                        navigate('../users/login');
                    });
            } catch (e) {
                console.log(e);
                if (e.response.status === 500) {
                    alert('이미 존재하는 이메일입니다!!');
                    event.target[1].value = '';
                    setEmailMessage('');
                }
            }
        },
        [name, email, password, navigate],
    );

    // 이름
    const onChangeName = useCallback((event) => {
        setName(event.target.value);
        if (event.target.value.length < 2 || event.target.value.length > 10) {
            setNameMessage('2글자 이상 10글자 미만으로 입력해주세요.');
            setIsName(false);
        } else {
            setNameMessage('올바른 이름 형식입니다.');
            setIsName(true);
        }
    }, []);

    // 이메일
    const onChangeEmail = useCallback((event) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const emailCurrent = event.target.value;
        setEmail(emailCurrent);

        if (!emailRegex.test(emailCurrent)) {
            setEmailMessage('이메일 형식이 틀렸습니다');
            setIsEmail(false);
        } else {
            setEmailMessage('올바른 이메일 형식입니다.');
            setIsEmail(true);
        }
    }, []);

    // 비밀번호
    const onChangePassword = useCallback((event) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
        const passwordCurrent = event.target.value;
        setPassword(passwordCurrent);

        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('숫자+영문자 조합으로 8자리 이상 입력해주세요!');
            setIsPassword(false);
        } else {
            setPasswordMessage('안전한 비밀번호입니다.');
            setIsPassword(true);
        }
    }, []);

    return (
        <FromContainer>
            <Form onSubmit={signUpRequestHandler}>
                <div className={'auth-item'}>
                    <LabelBox>
                        <label htmlFor={'display-name'}>Display name</label>
                        {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
                    </LabelBox>
                    <InputBox>
                        <input type={'text'} id={'display-name'} name={'display-name'} onChange={onChangeName} className={`${isName ? 'correct' : 'wrong'}`} />
                    </InputBox>
                </div>
                <div className={'auth-item'}>
                    <LabelBox>
                        <label htmlFor={'email'}>Email</label>
                        {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
                    </LabelBox>
                    <InputBox>
                        <input type={'email'} id={'email'} name={'email'} onChange={onChangeEmail} className={`${isEmail ? 'correct' : 'wrong'}`} />
                    </InputBox>
                </div>
                <div className={'auth-item'}>
                    <LabelBox>
                        <label htmlFor={'password'}>Password</label>
                        {password.length > 0 && <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>}
                    </LabelBox>
                    <InputBox>
                        <input
                            type={'password'}
                            id={'password'}
                            name={'password'}
                            onChange={onChangePassword}
                            className={`${isPassword ? 'correct' : 'wrong'}`}
                        />
                    </InputBox>
                    <p className={'caption'}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
                </div>
                <ButtonBox>
                    <BlueBtn disabled={!(isName && isEmail && isPassword)}>Sign up</BlueBtn>
                    <div className={'caption'}>{PolicyMessage}</div>
                </ButtonBox>
            </Form>
        </FromContainer>
    );
};

export default SignUpForm;
