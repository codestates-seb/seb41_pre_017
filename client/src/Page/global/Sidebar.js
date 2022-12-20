import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Aside = styled.aside`
    width: 200px;
    display: inline-block;
    margin-left: 40px;
    border-right: 1px solid var(--theme-border);
`;

const Nav = styled.nav`
    position: sticky;
    margin-top: 20px;
    top: 80px;
`;

const NavList = styled.ol`
    padding: 0;
    margin-top: 16px;
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    li {
        padding-left: 10px;
        margin-bottom: 10px;
    }
    .subNav {
        margin-bottom: 10px;
        margin-left: 20px;
    }
`;

const StyledLink = styled(Link)`
    padding-left: 10px;
    height: 40px;
    line-height: 40px; //텍스트 중앙정렬
    :hover {
        background: var(--theme-button-hover-background-color);
        color: var(--theme-button-hover-color);
    }
`;

function Sidebar() {
    return (
        <Aside>
            <Nav>
                <NavList>
                    <StyledLink to="/">Home</StyledLink>
                    <NavList>
                        <li>PUBLIC</li>
                        <StyledLink className="subNav" to="/questions">
                            Questions
                        </StyledLink>
                        <StyledLink className="subNav" to="/">
                            Tags
                        </StyledLink>
                        <StyledLink className="subNav" to="/">
                            Companies
                        </StyledLink>
                    </NavList>
                </NavList>
            </Nav>
        </Aside>
    );
}

export default Sidebar;
