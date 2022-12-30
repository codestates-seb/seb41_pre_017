import TeamIntroduction from './Team';
import styled from 'styled-components';
import BackImg from './images/back3.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Main = styled.main`
    margin: 0;
    height: 100%;
    text-align: center;
`;

const Section = styled.section`
    background: url(${BackImg}) fixed;
    background-size: 100%;
    height: 800px;

    h1 {
        font-size: 6em;
        width: 500px;
        position: absolute;
        top: 150px;
        left: 400px;
        animation: slide 1.5s ease-out;
    }

    @keyframes slide {
        from {
            left: -100px;
            opacity: 0;
        }
        to {
            left: 400px;
            opacity: 1;
        }
    }

    @keyframes disappear {
        from {
            left: 400px;
            opacity: 1;
        }
        to {
            left: -100px;
            opacity: 0;
        }
    }
    ::after {
        width: 100%;
        height: 100%;
        content: '';
        top: 0;
        left: 0;
        z-index: -1;
    }
`;

const Developer = styled.section`
    background-color: #111;
    color: #999;
    clear: both;
    height: 500px;
`;

const DevTitle = styled.h2`
    color: white;
    font-size: 4em;
    padding-top: 50px;
    transform: translateY(20px);
    opacity: 0;
    @keyframes fadein {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }
`;
const StartBtn = styled.button`
    background-color: var(--theme-Orange);
    color: white;
    padding: 15px 30px;
    border-radius: 15px;
    font-size: 1.4em;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    font-weight: 600;
    text-decoration: none;
    transition: 0.25s;
    cursor: pointer; // 마우스 모양 설정
    :hover {
        transform: scale(1.4);
    }
`;

const Presentation = () => {
    const [position, setPosition] = useState(0);
    const onScroll = () => {
        setPosition(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <Main>
            <Section>
                <h1 style={position > 100 ? { animation: `disappear 1s ease-out forwards` } : null}>GOAT 팀 프로젝트</h1>
            </Section>
            <Developer>
                <DevTitle style={position > 200 ? { animation: `fadein 4s ease-in-out forwards` } : null}>Developer</DevTitle>
                <TeamIntroduction />
                <Link to="/questions">
                    <StartBtn>START</StartBtn>
                </Link>
            </Developer>
        </Main>
    );
};

export default Presentation;
