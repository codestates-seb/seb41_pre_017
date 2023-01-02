import styled from 'styled-components';
import { ReactComponent as Created } from '../profile/img/createdAt.svg';
import { ReactComponent as Email } from '../profile/img/email.svg';
import TimeForToday from '../../../components/function/timeForToday';
import { ImgArr } from '../../userList/ImgArr';

const StyledHeader = styled.div`
    display: flex;

    img {
        width: 128px;
        height: 128px;
        box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
    }

    .userinfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;

        p {
            font-size: 30px;
            margin-bottom: 15px;
        }

        span {
            color: gray;
            font-size: 13px;
            margin: 0px 10px 5px 0px;

            svg {
                height: 12px;
                margin-right: 5px;
            }
        }
    }
`;



const ProfileHeader = ({ userData }) => {
    const time = TimeForToday(new Date(userData.createdAt));
    const memberImg = () => {
        if(userData.memberId > 21 ) return ImgArr[0];
        else return ImgArr[userData.memberId];
        }

    return (
        <StyledHeader>
            <img src={ImgArr[userData.memberId] ? memberImg() : ImgArr[0]} alt="profile img" />
            <div className="userinfo">
                <p>{userData.nickname}</p>
                <span>
                    <Created />
                    Member for {time}
                </span>
                <span>
                    <Email />
                    {userData.email}
                </span>
            </div>
        </StyledHeader>
    );
};

export default ProfileHeader;
