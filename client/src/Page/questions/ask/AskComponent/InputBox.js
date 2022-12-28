import styled from "styled-components";
import TextEditor from "./TextEditor";
import StyledButton from "./Btn";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 850px;
    padding: 24px;
    margin-bottom: 15px;
    border: 1px solid #E3E6E8;

    /* 첫번째 라벨 */
    >:first-child {
        font-weight: 800;
        margin-bottom: 2px;
    }

    /* 두번째 라벨 */
    >:nth-child(2){
        font-size: 14px;
    }

    input {
        border: 1px solid var(--theme-border);
        height: 25px;
        width: 840px;
        border-radius: 3px;
        margin: 7px 0px 10px 0px;
        padding-left: 10px;  
    }
`

const InputBox = ({data, setIsHide, idx, title, setTitle, 
    problem, setProblem, tag, setTag, refs}) => {
    const [secondInput, lastInput, setSubmit] = refs;

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleTag = (e) => {
        setTag(e.target.value);
    };

    const handleHide = () => {
        const setting = [false, false, false];
        setting[idx] = true;
        setIsHide(setting);
    };

    const HandleNextInput = (id) => {
        // console.log(lastInput);
        switch(id) {
            case "title" : secondInput.current.focus(); break;
            case "problem" : lastInput.current.focus(); break;
            case "tag" : setSubmit(true); break;
            default : break;
        }
    }

    return (
        <Wrapper>
            <label htmlFor={data.id}>{data.label1}</label>
            <label htmlFor={data.id}>{data.label2}</label>            
            {
                data.type === 0 ?
                <> 
                    <input 
                        onChange={data.id === 'title' ? handleTitle : handleTag}
                        onFocus={()=>{
                            handleHide();
                        }} 
                        value={data.id=== 'title' ? title : tag}
                        type="text" id={data.id} 
                        placeholder={data.placeholder}
                        ref={ data.id === 'tag' ? lastInput : null} 
                    /> 
                </>
                :<TextEditor
                    data={data}
                    handleHide={handleHide} 
                    handler={{problem, setProblem}}
                    secondInput={secondInput}
                    problem={problem} setProblem={setProblem}
                />
            }
            <StyledButton onClick={() => HandleNextInput(data.id)}>Next</StyledButton>
        </Wrapper>
    )
};

export default InputBox;