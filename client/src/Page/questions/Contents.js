import { useState } from 'react';
import styled from 'styled-components';
import QuestionsBox from '../component/function/questionsBox';

const PageBtn = styled.li`
    display: inline;
    list-style: none;
    padding: 5px 10px;
    border: 1px solid var(--theme-border);
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
    pointer-events: ${(props) => (props.disabled ? 'none' : null)};
    :hover {
        background-color: var(--theme-link-text2);
    }
`;
const PageList = styled.ul`
    display: flex;
    margin: 30px;
    margin-top: 80px;
    margin-bottom: 40px;
    .active {
        background-color: var(--theme-Orange);
        color: #fff;
    }
`;
const Pagination = ({ _data }) => {
    const [data, setData] = useState(_data);
    const [currentPage, setCurrentPage] = useState(1); //현재 페이지
    const [itemsPerPage, setItemsPerPage] = useState(10); //아이템 갯수
    const [pageLimit, setPageLimit] = useState(5); // 페이지 버튼갯수

    // 페이지이동시 버튼값 변경을 위한 값
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);

    // 현재 페이지를 가리킴
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    /* 페이지버튼 총 갯수 */
    const pages = [];
    // Math.ceil -> 나눴을때 발생하는 소수점 처리
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    // 현재 페이지를 기준으로 데이터를 잘라서 보여줌 (itemsPerPage = 아이템 갯수 ,currentPage= 현재 페이지 )
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // 페이지 버튼 생성
    const renderPageNumbers = pages.map((num) => {
        if (num < maxPageLimit + 1 && num > minPageLimit) {
            return (
                <PageBtn key={num} id={num} onClick={handleClick} className={currentPage === num ? 'active' : null}>
                    {num}
                </PageBtn>
            );
        } else {
            return null;
        }
    });

    // 페이지 뒤로가기 이벤트
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageLimit === 0) {
            setMinPageLimit(minPageLimit - pageLimit);
            setMaxPageLimit(maxPageLimit - pageLimit);
        }
    };

    // 페이지 앞으로가기 이벤트
    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageLimit) {
            setMinPageLimit(minPageLimit + pageLimit);
            setMaxPageLimit(maxPageLimit + pageLimit);
        }
    };
    return (
        <>
            <section>
                {currentItems.map((el) => {
                    return <QuestionsBox key={el.id} data={el} />;
                })}
            </section>
            <PageList>
                <PageBtn onClick={handlePrevBtn} disabled={currentPage === pages[0] ? true : false}>
                    Prev
                </PageBtn>

                {renderPageNumbers}

                <PageBtn onClick={handleNextBtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>
                    Next
                </PageBtn>
            </PageList>
        </>
    );
};

export default Pagination;
