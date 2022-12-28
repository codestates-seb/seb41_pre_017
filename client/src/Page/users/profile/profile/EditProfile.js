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

const EditProfile = () => {
    return (
        <Wrapper>
            <h2>Edit your profile</h2>
            <div className="border"></div>
            <p>Display name</p>
            <input value='omegle'></input>
            <p>Location</p>
            <input />
            <BlueBtn>Save profile</BlueBtn>
        </Wrapper>
    )
};

export default EditProfile;