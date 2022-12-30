import styled from 'styled-components';
import { Sidebar, Container, Main } from '../../global/Sidebar';
import SearchInput from '../../components/style/SearchInput';
import useInput from '../../components/hook/useInput';
import { useGet } from '../../components/hook/API/index';
import { useState } from 'react';
import User from './user';
const Title = styled.h1`
    font-weight: 100;
`;
const SearchInput2 = styled(SearchInput)`
    margin: 20px 0;
`;
const List = styled.section`
    display: grid;
    @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
    }
    @media (min-width: 680px) and (max-width: 980px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 980px) and (max-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const UserList = () => {
    const [loading, setLoading] = useState(true);
    const [data] = useGet(`members?page=1&size=100`, setLoading);
    const [value, setValue, ChangeValue] = useInput();

    return (
        <Container>
            <Sidebar></Sidebar>
            <Main>
                <Title>Users</Title>
                <SearchInput2 type="text" placeholder="  Filter by user" onChange={ChangeValue} Value={value} setValue={setValue} />
                <List>
                    {data.map((el, index) => {
                        if (el.nickname.includes(value)) {
                            return <User key={index} data={el} index={index}></User>;
                        } else {
                            return null;
                        }
                    })}
                </List>
            </Main>
        </Container>
    );
};

export default UserList;
