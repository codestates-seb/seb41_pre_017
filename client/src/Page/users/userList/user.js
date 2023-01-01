import styled from 'styled-components';
import TimeForToday from '../../components/function/timeForToday';
import {Link} from "react-router-dom";
import { ImgArr } from './ImgArr';

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
const User = ({data, index}) => {
    return (
        <UserCard>
            <UserImg src={ImgArr[data.memberId] ? ImgArr[data.memberId] : ImgArr[0]}></UserImg>
            <Container>
                <Link to={`/users/${data.memberId}`}>
                    <Name>{data.nickname}</Name>
                </Link>
                <CreatedAt>가입일: {TimeForToday(new Date(data.createdAt))}</CreatedAt>
            </Container>
        </UserCard>
    );
};

export default User;
