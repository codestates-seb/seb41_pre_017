import styled from "styled-components";
import {Link} from "react-router-dom";
import {Fragment} from "react";

const MessageBox = styled.div`
  box-sizing: inherit;
  max-width: calc(calc(97rem / 12) * 3);
  min-width: 316px;
  width: 100%;
  text-align: center;
  font-size: 13px;
  padding: 16px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;

  a {
    text-decoration: none;
    color: hsl(206, 100%, 40%);
    cursor: pointer;
    user-select: auto;
    font-size: 12px;
  }
`;

const EmpMessageBox = styled.div`
  margin-top: 12px;
`;

const SignUpMessages = (
    <span>Don't have an account?
        <Link to={'/users/signUp'}>
            Sign up
        </Link>
    </span>
);

const EmployerMessages = (
        <Fragment>
            <span>Are you an employer? </span>
            <a href={'https://careers.stackoverflow.com/employer/login'}>
                Sign up on Talent
            </a>
            <svg aria-hidden="true"
                 className="va-text-bottom sm:d-none svg-icon iconShareSm"
                 width="14" height="14"
                 viewBox="0 0 14 14">
                <path
                    d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"></path>
            </svg>
        </Fragment>
    )
;

const LoginMessageBox = () => {
    return (
        <MessageBox>
            {SignUpMessages}
            <EmpMessageBox>
                {EmployerMessages}
            </EmpMessageBox>
        </MessageBox>
    )
};

export default LoginMessageBox;