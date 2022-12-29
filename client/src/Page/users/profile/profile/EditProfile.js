import styled from "styled-components";
import BlueBtn from "../../../components/style/blueBtn";

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

const EditProfile = () => {
    return (
        <Wrapper>
            <h2>Edit your profile</h2>
            <div className="border"></div>
            <strong>Public information</strong>
            <BorderBox>
            <p>profile image</p>
                <img src="http://www.gravatar.com/avatar/iml1111?d=identicon&s=400" alt="profile img"/>
                
                <button type="button">change picture</button>
                <p>Display name</p>
                <input value='omegle'></input>
                <p>Location</p>
                <input />
            </BorderBox>
            <BlueBtn>Save profile</BlueBtn>
        </Wrapper>
    )
};

export default EditProfile;