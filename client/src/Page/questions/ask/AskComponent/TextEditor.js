import styled from 'styled-components';
import heading from '../../img/textEditor/types.png';
import bold from '../../img/textEditor/bold-text.png';
import italic from '../../img/textEditor/italic.png';
import inlineCode from '../../img/textEditor/html-coding.png';
import link from '../../img/textEditor/link.png';
import quote from '../../img/textEditor/quote.png';
import insertImage from '../../img/textEditor/insert-picture-icon.png';
import grid from '../../img/textEditor/pixels.png';
import numlist from '../../img/textEditor/numlist.png';
import list from '../../img/textEditor/list.png';
import more from '../../img/textEditor/more.png';
import help from '../../img/textEditor/help-web-button.png';
import { useState, useRef } from 'react';
import { TextToCode, CodeToHtml } from '../../../components/function/textConverter';

// 영역을 두개로 나눈다
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0px 5px 0px;
    border: 1px solid var(--theme-border);
`;

const Buttons = styled.div`
    margin-top: 6px;
    width: 850px;
    height: 35px;

    button {
        background-color: white;
        width: 30px;
        height: 24px;
        padding: 3px;
        margin: 3px 3px 3px 6px;

        img {
            width: 18px;
            height: 18px;
        }
    }

    .selected {
        background-color: #c7e0f4;
        padding-bottom: 23px;
        padding-top: 5px;
        border-radius: 5px;
    }
    button:hover {
        cursor: pointer;
        background-color: #efefef;
    }
`;

const TextArea = styled.textarea`
    border-radius: 3px;
    width: 845px;
    height: 220px;

    :focus {
    outline: 1px solid #6BBBF7;
    box-shadow: 1px 1px 10px rgb(193,213,227), -1px -1px 10px rgb(193,213,227);
    }
`

const Preview = styled.div`
    padding: 10px;
    line-height: 25px; // 텍스트 줄간격(행간) 조절
`;

const TextEditor = ({ data, handleHide, handler, secondInput, problem, setProblem }) => {
    const TextAreaFocus = useRef(null); // TextArea포커스 기능을 위한
    const [selectBtn, isSelectBtn] = useState(); //버튼 선택중
  
    // 텍스트를 html 로 바꾸기 위한
    const [isBold, setBold] = useState(false);
    const [isItalic, setItalic] = useState(false);
    const [isInlineCode, setInlineCode] = useState(false);

    // 버튼 이벤트로 해당 html 요소를 넣는 부분
    const Bold = () => {
        setBold((current) => !current);
        if (isBold) {
            setProblem(problem + '</b>');
            handler.setProblem(handler.problem + '</b>');
            isSelectBtn(null);
        } else {
            setProblem(problem + '<b>');
            handler.setProblem(handler.problem + '<b>');
            isSelectBtn('Bold');
        }
        // TextAreaFocus.current.focus();
        secondInput.current.focus()
    };
    const Italic = () => {
        setItalic((current) => !current);
        if (isItalic) {
            setProblem(problem + '</i>');
            handler.setProblem(handler.problem + '</i>');
            isSelectBtn(null);
        } else {
            setProblem(problem + '<i>');
            handler.setProblem(handler.problem + '<i>');
            isSelectBtn('Italic');
        }
        // TextAreaFocus.current.focus();
        secondInput.current.focus()
    };
    const InlineCode = () => {
        setInlineCode((current) => !current);
        if (isInlineCode) {
            setProblem(problem + '</code>');
            handler.setProblem(handler.problem + '</code>');
            isSelectBtn(null);
        } else {
            setProblem(problem + '<code>');
            handler.setProblem(handler.problem + '<code>');
            isSelectBtn('InlineCode');
        }
        // TextAreaFocus.current.focus();
        secondInput.current.focus()
    };
    // 정규식으로 줄바꿈 태그 넣는 부분
    const handleProblem = (e) => {
        setProblem(TextToCode(e.target.value));
        handler.setProblem(e.target.value);
    };

    return (
        <Wrapper>
            <Buttons>
                <button type="button">
                    <img src={heading} alt="heading" />
                </button>
                <button className={selectBtn === 'Bold' ? 'selected' : null} onClick={Bold} ref={TextAreaFocus}>
                    <img src={bold} alt="bold" />
                </button>
                <button className={selectBtn === 'Italic' ? 'selected' : null} onClick={Italic} ref={TextAreaFocus}>
                    <img src={italic} alt="italic" />
                </button>
                <button className={selectBtn === 'InlineCode' ? 'selected' : null} onClick={InlineCode} ref={TextAreaFocus}>
                    <img src={inlineCode} alt="inlineCode" />
                </button>
                <button>
                    <img src={link} alt="link" />
                </button>
                <button>
                    <img src={quote} alt="quote" />
                </button>
                <button>
                    <img src={insertImage} alt="insertImage" />
                </button>
                <button>
                    <img src={grid} alt="grid" />
                </button>
                <button>
                    <img src={numlist} alt="numlist" />
                </button>
                <button>
                    <img src={list} alt="list" />
                </button>
                <button>
                    <img src={more} alt="more" />
                </button>
                <button>
                    <a href="https://stackoverflow.com/editing-help">
                        {' '}
                        <img src={help} alt="help" />
                    </a>
                </button>
            </Buttons>
            <TextArea
                ref={secondInput}
                onFocus={handleHide}
                onChange={handleProblem}
                id={data.id} placeholder={data.placeholder}
                value={handler.problem}
            ></TextArea>
            {
                problem ? <Preview dangerouslySetInnerHTML={{ __html: CodeToHtml(problem) }} /> : null
            }
        </Wrapper>
    );
};

export default TextEditor;
