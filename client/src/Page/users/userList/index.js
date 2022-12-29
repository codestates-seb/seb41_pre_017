import styled from 'styled-components';
import { Sidebar, Container, Main } from '../../global/Sidebar';
import SearchInput from '../../components/style/SearchInput';
import useInput from '../../components/hook/useInput';
import { useEffect } from 'react';

const Title = styled.h1`
    font-weight: 100;
`;
const SearchInput2 = styled(SearchInput)`
    margin: 20px 0;
`;
const UserList = () => {
    const [value, setValue, ChangeValue] = useInput();
    useEffect(() => {});
    return (
        <Container>
            <Sidebar></Sidebar>
            <Main>
                <Title>Users</Title>
                <SearchInput2 type="text" placeholder="  Filter by user" OnChange={ChangeValue} Value={value} setValue={setValue} />
            </Main>
        </Container>
    );
};

export default UserList;
