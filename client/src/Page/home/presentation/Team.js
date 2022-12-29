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

const Num1 = styled.h2`
    color: #ff4949;
`;
const Num2 = styled.h2`
    color: beige;
`;
const Num3 = styled.h2`
    color: darkseagreen;
`;
const Num4 = styled.h2`
    color: pink;
`;
const Num5 = styled.h2`
    color: violet;
`;
const Num6 = styled.h2`
    color: #808080;
`;

const Job = styled.span`
    color: white;
    font-weight: 100;
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
                                <Num1>
                                    김민성<Job>Back-end</Job>
                                </Num1>
                            </Contents>
                        </Profile>
                    </TeamItem>
                    <TeamItem>
                        <Profile className="profile_beige">
                            <img src={B_img} />
                            <Contents>
                                <Num2>
                                    김승현<Job>Front-end</Job>
                                </Num2>
                            </Contents>
                        </Profile>
                    </TeamItem>
                    <TeamItem>
                        <Profile className="profile_green">
                            <img src={C_img} />
                            <Contents>
                                <Num3>
                                    박시환<Job>Back-end</Job>
                                </Num3>
                            </Contents>
                        </Profile>
                    </TeamItem>
                    <TeamItem>
                        <Profile className="profile_pink">
                            <img src={D_img} />
                            <Contents>
                                <Num4>
                                    방재영<Job>Back-end</Job>
                                </Num4>
                            </Contents>
                        </Profile>
                    </TeamItem>
                    <TeamItem>
                        <Profile className="profile_purple">
                            <img src={E_img} />
                            <Contents>
                                <Num5>
                                    이중원<Job>Front-end</Job>
                                </Num5>
                            </Contents>
                        </Profile>
                    </TeamItem>
                    <TeamItem>
                        <Profile className="num_6">
                            <img src={F_img} />
                            <Contents>
                                <Num6>
                                    장은지<Job>Front-end</Job>
                                </Num6>
                            </Contents>
                        </Profile>
                    </TeamItem>
                </Team>
            </Wrapper>
        </main>
    );
};

export default TeamIntroduction;
