import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`

    .border {
        border-top: 1px solid var(--theme-searchBar-border);
        margin: 20px 0px 20px 0px;
    }

    p {
        margin-bottom: 15px;
        line-height: 18px; 
    }

    li {
        margin: 0px 0px 20px 30px;
        line-height: 25px;    
    }

    button {
        display: flex;
        align-items:center;
        justify-content: center;
        margin: 20px 0px 0px 0px;
        width: 120px;
        height: 40px;
        color: white;
        background-color: #D0393E;
        border-radius: 5px;
        cursor: pointer;

        :hover {
            background-color: #C22E32;
        }

        :disabled {
            background-color: #E89C9F;
            cursor: default;
        }
    }

`

const DeleteProfile = () => {

    const [isChecked, setIschecked] = useState(false);

    const HandleButton = (e) => {
        setIschecked(!isChecked);
    }

    return (
        <Wrapper>
            <h2>Delete Profile</h2>
            <div className="border"></div>
            <p>Before confirming that you would like your profile deleted, we'd like to take a moment to explain the implications of deletion:</p>
            <ul>
                <li> Deletion is irreversible, and you will have no way to regain any of your original content, should this deletion be carried out and you change your mind later on.</li>
                <li>Your questions and answers will remain on the site, but will be disassociated and anonymized (the author will be listed as "user20812237") and will not indicate your authorship even if you later return to the site.</li>
            </ul>
            <p>Confirming deletion will only delete your profile on Stack Overflow - it will not affect any of your other profiles on the Stack Exchange network. If you want to delete multiple profiles, you'll need to visit each site separately and request deletion of those individual profiles.</p>
            <input type='checkbox' id='checkbox' value={isChecked} onClick={HandleButton}/>
            <label for="checkbox"> I have read the information stated above and understand the implications of having my profile deleted. I wish to proceed with the deletion of my profile.</label>
            <button disabled={isChecked ? false : true}>Delete profile</button>
        </Wrapper>
    );
}

export default DeleteProfile;