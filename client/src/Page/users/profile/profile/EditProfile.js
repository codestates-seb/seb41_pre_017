import styled from "styled-components";
import BlueBtn from "../../../components/style/blueBtn";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ImgArr } from "../../userList/ImgArr";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    .border {
        border-top: 1px solid var(--theme-searchBar-border);
        margin: 20px 0px 20px 0px;
    }

    p {
        margin-bottom: 10px;
    }

    input {
        border: 1px solid var(--theme-searchBar-border);
        width: 400px;
        height: 25px;
        margin-bottom: 10px;
        padding-left: 5px;
    }

    button {
        width: 120px;
        height: 40px;
        margin: 0px 0px 20px 0px;
    }
`
const BorderBox = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
    border-radius: 5px;
    padding: 15px;
    margin: 10px 0px 20px 0px;
    width: 100%;

        p {
            margin-top: 5px;
        }
        img {
            width: 128px;
            height: 128px;
            margin-bottom: 30px;
        }
        
        span {
            color: red;
            font-size: 12px;
        }
        
`

const EditProfile = ({setChangeNickname, changeNickname, userData, HandleChange}) => {
    const [cookie] = useCookies(['memberId']);
    
    const onChange = (e) => {
        setChangeNickname(e.target.value);
    }

    const handleNickname = () => {
        if(changeNickname.length <= 1 || changeNickname.length > 4) { 
            alert("닉네임은 2글자 이상 5글자 미만으로 입력해주세요.")
            return;
        }
        alert('닉네임이 변경되었습니다.')
        axios.patch(`http://localhost:8080/members/${cookie.memberId}`,{
            "nickname": changeNickname,   
        })
    }

    const memberImg = ImgArr[userData.memberId];

    return (
        <Wrapper>
            <h2>Edit your profile</h2>
            <div className="border"></div>
            <strong>Public information</strong>
            <BorderBox>
                <p>Profile image</p>
                <img src={ImgArr[userData.memberId] ? memberImg : ImgArr[0]} alt="profile img"/>
                <label htmlFor="input">Change Nickname</label>
                <input id="input"  onChange={onChange} value={changeNickname} placeholder={userData.nickname} />
                { changeNickname.length >= 1 
                ? <span>닉네임은 2글자 이상 5글자 미만으로 입력해주세요</span>
                : null
                }
                </BorderBox>
            <BlueBtn onClick={handleNickname}>Save Profile</BlueBtn>
        </Wrapper>
    )
};

export default EditProfile;