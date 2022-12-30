import styled from 'styled-components';

const Background = styled.div`
    height: 100vh;
    background: #ffffffb7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoadingView = styled.div``;

export const Loading = () => {
    return (
        <Background>
            <LoadingView>Loading...</LoadingView>
        </Background>
    );
};

export default Loading;
