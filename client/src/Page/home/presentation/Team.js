import styled from 'styled-components';
import A_img from './images/blue.png';
import B_img from './images/doggy.png';
import C_img from './images/green.png';
import D_img from './images/pink.png';
import E_img from './images/purple.png';
import F_img from './images/red.png';

const Wrapper = styled.div`
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0px;
    li {
        list-style-type: none;
    }
`;
const Team = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const TeamItem = styled.li`
    flex-basis: 100px;
    flex-shrink: 0;
    margin: 0 10px;
    transition: all 0.4s;
    img {
        width: 100%;
    }
    :hover {
        flex-basis: 140px;
        margin: 0 20px;
    }
    .profile_red {
        color: #ff4949;
    }

    .profile_beige {
        color: beige;
    }

    .profile_green {
        color: darkseagreen;
    }

    .profile_pink {
        color: pink;
    }

    .profile_purple {
        color: violet;
    }
`;
const Profile = styled.div`
    background-color: #222;
    position: relative;
    overflow: hidden;
    ::before {
        content: ' ';
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.95+100 */
        background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#f2000000',GradientType=0 ); /* IE6-9 */
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 120px;
    }
`;
const Contents = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 10px;
    h2 {
        font-size: 20px;
    }
    h2 span {
        display: block;
        font-size: 12px;
    }
`;

const TeamIntroduction = () => {
    return (
        <main>
            <Wrapper>
                <Team>
                    <TeamItem>
                        <Profile className="profile_red">
                            <img src={A_img} />
                            <Contents>
                                <h2>
                                    김민성<span>Back-end</span>
                                </h2>
                            </Contents>
                        </Profile>
                    </TeamItem>
                    <TeamItem>
                        <Profile className="profile_beige">
                            <img src={B_img} />
                            <Contents>
                                <h2>
                                    김승현<span>Front-end</span>
                                </h2>
                            </Contents>
                        </Profile>
                    </TeamItem>
                    <TeamItem>
                        <Profile className="profile_green">
                            <img src={C_img} />
                            <Contents>
                                <h2>
                                    박시환<span>Back-end</span>
                                </h2>
                            </Contents>
                        </Profile>
                    </TeamItem>
                    <TeamItem>
                        <Profile className="profile_pink">
                            <img src={D_img} />
                            <Contents>
                                <h2>
                                    방재영<span>Back-end</span>
                                </h2>
                            </Contents>
                        </Profile>
                    </TeamItem>
                    <TeamItem>
                        <Profile className="profile_purple">
                            <img src={E_img} />
                            <Contents>
                                <h2>
                                    이중원<span>Front-end</span>
                                </h2>
                            </Contents>
                        </Profile>
                    </TeamItem>
                    <TeamItem>
                        <Profile className="num_6">
                            <img src={F_img} />
                            <Contents>
                                <h2>
                                    장은지<span>Front-end</span>
                                </h2>
                            </Contents>
                        </Profile>
                    </TeamItem>
                </Team>
            </Wrapper>
        </main>
    );
};

export default TeamIntroduction;
