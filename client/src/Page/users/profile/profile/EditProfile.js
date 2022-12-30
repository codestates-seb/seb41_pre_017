import styled from "styled-components";
import BlueBtn from "../../../components/style/blueBtn";
import axios from 'axios';
import { useCookies } from 'react-cookie';

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
        }
`

const EditProfile = ({setChangeNickname, changeNickname, changePwd, setChangePwd}) => {
    const [cookie] = useCookies(['memberId']);

    const onChange = (e) => {
        setChangeNickname(e.target.value);
    }

    const onChangePwd = (e) => {
        setChangePwd(e.target.value);
    }

    const handleNickname = () => {
        axios.patch('http://localhost:8080/members/${cookie}',{
            "nickname": changeNickname,   
        })
        .then(res => window.location.reload())
        console.log(changeNickname);
        }

    const handlePassword = () => {
        axios.patch('http://localhost:8080/members/${cookie}',{
            "pwd": changePwd,   
        })
        .then(res => window.location.reload())
        console.log(changePwd);
    }

    return (
        <Wrapper>
            <h2>Edit your profile</h2>
            <div className="border"></div>
            <strong>Public information</strong>
            <BorderBox>
            <p>Profile image</p>
                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcqGhr6%2FbtrCOJ8rccY%2FBhZcEFwWj2ccg2nmvfrvWk%2Fimg.png" alt="profile img"/>
                <p>Display name</p>
                <input onChange={onChange} value={changeNickname} />
                <p>Location</p>
                <input />
            </BorderBox>
            <BlueBtn onClick={handleNickname}>Save</BlueBtn>
            <strong>Private information</strong>
            <BorderBox>
                <p>Password</p>
                <input />
                <p>Password confirm</p>
                <input onChange={onChangePwd} value={changePwd}/>
            </BorderBox>
            <BlueBtn onClick={handlePassword}>Save</BlueBtn>
            
        </Wrapper>
    )
};

export default EditProfile;