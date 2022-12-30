import styled from 'styled-components';
import footerData from './footerdata';
import { ReactComponent as Logo } from '../../../Img/footerLogo.svg';

const Wrapper = styled.footer`
    width: 100%;
    height: 322px;
    background-color: #232629;
`;
const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 30px 12px 12px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    flex: 1 0 auto;
    margin: 0 auto;

    svg {
        margin: -18px 20px 0px -70px;
    }

    div {
        width: 200px;
    }

    div:last-child {
        margin-left: 80px;
    }

    h5 {
        width: 300px;
        display: flex;
        color: white;
        margin-bottom: 15px;
    }

    ul {
        list-style: none;
    }

    li {
        color: white;
        margin-bottom: 8px;
        font-size: 12px;
    }

    ul:last-child :nth-child(6) {
        margin-bottom: 10px;
    }

    a {
        margin-right: 7px;
        width: 250px;
        height: 100%;
        color: white;
        font-size: 12px;
    }
    p {
        margin-top: 200px;
        color: white;
        width: 260px;
        font-size: 10px;
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Logo className="logo" width="47px" height="52px" />
                {footerData.map((data, idx) => {
                    return (
                        <div key={idx}>
                            <h5>{data.subject}</h5>
                            <ul>
                                {data.li.map((data, idx) => {
                                    return <li key={idx}>{data}</li>;
                                })}
                            </ul>
                        </div>
                    );
                })}
                <div>
                    <a href="https://stackoverflow.blog/?blb=1&_ga=2.142534651.832098667.1671540230-528380903.1671540230">Blog</a>
                    <a href="https://www.facebook.com/officialstackoverflow/">Facebook</a>
                    <a href="https://twitter.com/stackoverflow">Twitter</a>
                    <a href="https://www.linkedin.com/company/stack-overflow">Linkedin</a>
                    <a href="https://www.instagram.com/thestackoverflow/">Instagram</a>
                    <p>Site design / logo © 2022 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2022.12.21.43127 </p>
                </div>
            </Container>
        </Wrapper>
    );
};

export default Footer;
