import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Wrapper = styled.div`
    .border {
        border-top: 1px solid var(--theme-searchBar-border);
        margin: 20px 0px 20px 0px;
    }

    p {
        margin-bottom: 15px;
        line-height: 18px;
        letter-spacing: 0.7px;
    }

    li {
        margin: 0px 0px 20px 30px;
        line-height: 25px;
        font-size: 15px;
    }

    label {
        font-size: 15px;
        letter-spacing: 0.5px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0px 0px 0px;
        width: 120px;
        height: 40px;
        color: white;
        background-color: #d0393e;
        border-radius: 5px;
        cursor: pointer;

        :hover {
            background-color: #c22e32;
        }

        :disabled {
            background-color: #e89c9f;
            cursor: default;
        }
    }
`;

const DeleteProfile = () => {
    const [isChecked, setIschecked] = useState(false);
    const navigate = useNavigate();
    const [cookie, , removeCookie] = useCookies(['memberId']);

    const HandleDelete = () => {
        axios
            .delete(`http://localhost:8080/members/${cookie.memberId}`, {})
            .then((response) => {
                alert('계정이 삭제되었습니다');
                removeCookie('memberId');
                navigate('/');
                // 로그아웃 상태로 진입
            })
            .catch(() => {
                console.log('삭제 요청 실패');
            });
    };

    const HandleButton = (e) => {
        setIschecked(!isChecked);
    };

    return (
        <Wrapper>
            <h2>Delete Profile</h2>
            <div className="border"></div>
            <p>Before confirming that you would like your profile deleted, we'd like to take a moment to explain the implications of deletion:</p>
            <ul>
                <li>
                    {' '}
                    Deletion is irreversible, and you will have no way to regain any of your original content, should this deletion be carried out and you
                    change your mind later on.
                </li>
                <li>
                    Your questions and answers will remain on the site, but will be disassociated and anonymized (the author will be listed as "user20812237")
                    and will not indicate your authorship even if you later return to the site.
                </li>
            </ul>
            <p>
                Confirming deletion will only delete your profile on Stack Overflow - it will not affect any of your other profiles on the Stack Exchange
                network. If you want to delete multiple profiles, you'll need to visit each site separately and request deletion of those individual profiles.
            </p>
            <input type="checkbox" id="checkbox" value={isChecked} onClick={HandleButton} />
            <label htmlFor="checkbox">
                {' '}
                I have read the information stated above and understand the implications of having my profile deleted. I wish to proceed with the deletion of my
                profile.
            </label>
            <button onClick={HandleDelete} disabled={isChecked ? false : true}>
                Delete profile
            </button>
        </Wrapper>
    );
};

export default DeleteProfile;
