import styled from 'styled-components';
import TimeForToday from '../../components/function/timeForToday';
import a1 from './Img/a1.png';
import p1 from './Img/p1.jpg';
import p2 from './Img/p2.jpg';
import p3 from './Img/p3.jpg';
import p4 from './Img/p4.jpg';
import p5 from './Img/p5.jpg';
import p6 from './Img/p6.png';
import p7 from './Img/p7.jpg';
import p8 from './Img/p8.jpg';
import p9 from './Img/p9.jpg';
import p10 from './Img/p10.jpg';
import p11 from './Img/p11.jpg';
import p12 from './Img/p12.jpg';
import p13 from './Img/p13.jpg';
import p14 from './Img/p14.jpg';
import p15 from './Img/p15.jpg';
import p16 from './Img/p16.jpg';
import p17 from './Img/p17.jpg';
import p18 from './Img/p18.jpg';
import p19 from './Img/p19.jpg';
import p20 from './Img/p20.jpg';

const UserCard = styled.div`
    margin: 10px;
    padding: 10px;
    width: 150px;
    display: flex;
`;
const Name = styled.div`
    color: blue;
    font-size: 14px;
`;

const Container = styled.div`
    display: flex;
    margin-left: 5px;
    flex-direction: column;
    flex-wrap: nowrap;

    justify-content: space-around;
`;
const CreatedAt = styled.div`
    font-size: 12px;
`;
const UserImg = styled.img`
    width: 50px;
    height: 50px;
`;
const User = ({ data, index }) => {
    const ImgArr = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20];
    return (
        <UserCard>
            <UserImg src={ImgArr[index] ? ImgArr[index] : a1}></UserImg>
            <Container>
                <Name>{data.nickname}</Name>

                <CreatedAt>가입일: {TimeForToday(new Date(data.createdAt))}</CreatedAt>
            </Container>
        </UserCard>
    );
};

export default User;
