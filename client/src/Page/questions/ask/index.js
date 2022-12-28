import { useState } from 'react';
import styled from 'styled-components';
import AskHeader from './AskComponent/AskHeader';
import StyledButton from './AskComponent/Btn';
import ChainBox from './AskComponent/ChainBox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useConfirm from '../../components/hook/useConfirm';



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1264px;
    flex: 1 0 auto;
    justify-content: space-between;
    margin: 0 auto;

    .buttonSubmit {
        margin-top: -20px;
        margin-bottom: 60px;
    }

    button:disabled {
        border: 0px;
        background-color : #82C7FC;
        cursor: default;
    }
`

const QuestionAsk = () => {    
    const [ title, setTitle ] = useState('');
    const [ problem, setProblem ] = useState('');
    const [ tag, setTag ] = useState('');
    const [ submit, setSubmit ] = useState(false);
    const navigate = useNavigate();

// useConfirm은 파라미터로는 message와 callback 함수로 onConfirm(확인 눌렀을 때), onCancel(취소 눌렀을 때)를 받습니다.
// 그리고 confirm의 return 값이 true일 경우 onConfirm 이 반환, 아닐 경우 onCancel이 반환됩니다.
    const deleteConfirm = () => {
        setTitle('');
        setProblem('');
        setTag('');
    };

    const cancelConfirm = () => {

    };

    const confirmDelete = useConfirm(
        "정말 삭제하시겠습니까?", 
        deleteConfirm,
        cancelConfirm   
    );     
        
    // { title, expect: expect, problem: problem, tag: tag }
    const handleSubmit = (e) => {
        const data = {
            title: 'title',
            content: 'problem',
            memberId : 1,
        }
        console.log(data);

        axios.post('http://localhost:8080/questions', data)
        .then(res => {
            if(res.status === 201) {
                alert('질문이 등록되었습니다.');
                navigate('/');
            }
        })
        .catch(e => console.log(e))
    }

    return (
        <>
            <Wrapper>
                <AskHeader />
                <ChainBox 
                    title={title} setTitle={setTitle}
                    problem={problem} setProblem={setProblem}
                    tag={tag} setTag={setTag} 
                     setSubmit={setSubmit} />
                <div className='buttonSubmit'>
                    <StyledButton type="button" onClick={handleSubmit} disabled={submit ? false : true}>Review your question</StyledButton>
                    <StyledButton onClick={confirmDelete} color="red" background="white">Discard draft</StyledButton>
                </div>
            </Wrapper>
        </>
    )
}

export default QuestionAsk;