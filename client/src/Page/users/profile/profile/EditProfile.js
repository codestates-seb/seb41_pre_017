import styled from "styled-components";
import BlueBtn from "../../../components/style/blueBtn";
import axios from 'axios';

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
        margin-top: 10px;
    }
`
const BorderBox = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 0 5px -2px rgb(90, 90, 90);
    border-radius: 5px;
    padding: 15px;
    margin-top: 10px;
    width: 100%;

        p {
            margin-top: 5px;
        }
        img {
            width: 128px;
        }

        button {
            margin: -30px 0px 10px 0px;
            width: 128px;
            height: 30px;
            background-color: gray;
            color: white;
            cursor: pointer;
        }
`

const EditProfile = ({setChangeNickname, changeNickname}) => {
    const onChange = (e) => {
        setChangeNickname(e.target.value);
    }

    const handleNickname = () => {
    
            axios.patch('http://localhost:8080/members/2',{
                "nickname": changeNickname,   
            })
            .then(res => window.location.reload())
            console.log(changeNickname);
        }

    return (
        <Wrapper>
            <h2>Edit your profile</h2>
            <div className="border"></div>
            <strong>Public information</strong>
            <BorderBox>
            <p>profile image</p>
                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcqGhr6%2FbtrCOJ8rccY%2FBhZcEFwWj2ccg2nmvfrvWk%2Fimg.png" alt="profile img"/>
                <p>Display name</p>
                <input onChange={onChange} value={changeNickname}></input>
                <p>Location</p>
                <input />
            </BorderBox>
            <BlueBtn onClick={handleNickname}>Save profile</BlueBtn>
        </Wrapper>
    )
};

export default EditProfile;