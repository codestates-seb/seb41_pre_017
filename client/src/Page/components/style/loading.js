import styled from 'styled-components';
import loadingImg from '../../../Img/loading.gif'

const Background = styled.div`
    height: 100vh;
    background: #ffffffb7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoadingView = styled.div`
    width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	position: fixed;
	display: black;
	opacity: 0.8;
	background: white;
	z-index: 99;
	text-align: center;

    img {
        width: 50px;
        height: 50px;
        position: absolute;
        z-index:100;
        top:50%;
        left:50%;
    }
`;

export const Loading = () => {
    return (
        <Background>
            <LoadingView><img src={loadingImg} alt='Loading...' /></LoadingView>
        </Background>
    );
};

export default Loading;
