import styled from 'styled-components';
import heading from '../../questions/img/textEditor/types.png';
import bold from '../../questions/img/textEditor/bold-text.png';
import italic from '../../questions/img/textEditor/italic.png';
import inlineCode from '../../questions/img/textEditor/html-coding.png';
import link from '../../questions/img/textEditor/link.png';
import quote from '../../questions/img/textEditor/quote.png';
import insertImage from '../../questions/img/textEditor/insert-picture-icon.png';
import grid from '../../questions/img/textEditor/pixels.png';
import numlist from '../../questions/img/textEditor/numlist.png';
import list from '../../questions/img/textEditor/list.png';
import more from '../../questions/img/textEditor/more.png';
import help from '../../questions/img/textEditor/help-web-button.png';
import { useState, useRef } from 'react';
import { TextToCode, CodeToHtml } from './textConverter';
import BlueBtn from '../style/blueBtn';

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
    width: 100%;
    height: 250px;
    line-height: 25px;
    font-size: 1em;
    letter-spacing: 1px;
    resize: none;
    overflow: scroll;
    border-bottom: 1px solid var(--theme-border);
    border-top: 1px solid var(--theme-border);

  :focus {
    outline: 1px solid #6BBBF7;
    box-shadow: 1px 1px 10px rgb(193,213,227), -1px -1px 10px rgb(193,213,227);
  }
`;

const Title = styled.h2`
    margin-bottom: 10px;
    color: #232629;
    font-weight: 100;
`;

const Preview = styled.div`
    padding: 10px;
    line-height: 25px; // 텍스트 줄간격(행간) 조절
`;

const PostBtn = styled(BlueBtn)`
    margin-top: 30px;
`;

const TextBox = ({ title = '', subtitle = '', OnChange, Placeholder = '입력해주세요', Value, setValue, SubmitBtnName, Submit }) => {
    const TextAreaFocus = useRef(null); // TextArea포커스 기능을 위한
    const [selectBtn, isSelectBtn] = useState(); //버튼 선택중

    // 텍스트를 html 로 바꾸기 위한
    const [PreviewText, setPreviewText] = useState(TextToCode(Value)); //프리뷰
    const [isBold, setBold] = useState(false);
    const [isItalic, setItalic] = useState(false);
    const [isInlineCode, setInlineCode] = useState(false);

    // 버튼 이벤트로 해당 html 요소를 넣는 부분
    const Bold = () => {
        setBold((current) => !current);
        if (isBold) {
            setValue(Value + '</b>');
            isSelectBtn(null);
        } else {
            setValue(Value + '<b>');
            isSelectBtn('Bold');
        }
        TextAreaFocus.current.focus();
    };
    const Italic = () => {
        setItalic((current) => !current);
        if (isItalic) {
            setValue(Value + '</i>');
            isSelectBtn(null);
        } else {
            setValue(Value + '<i>');
            isSelectBtn('Italic');
        }
        TextAreaFocus.current.focus();
    };
    const InlineCode = () => {
        setInlineCode((current) => !current);
        if (isInlineCode) {
            setValue(Value + '</code>');
            isSelectBtn(null);
        } else {
            setValue(Value + '<code>');
            isSelectBtn('InlineCode');
        }
        TextAreaFocus.current.focus();
    };

    //input입력값을 value로 변경하는 이벤트 함수
    const ConvertText = (e) => {
        OnChange(e);
        setPreviewText(TextToCode(e.target.value));
    };

    /* Submit버튼을 눌렀을때 이벤트
        PreviewText 초기화
        부모에게서 받은 Submit 함수 실행
    */
    const handleSubmit = () => {
        Submit();
        setPreviewText('');
    };
    return (
        <div>
            <Title>{title}</Title>
            <div>{subtitle ? subtitle : null}</div>
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
                            <img src={help} alt="help" />
                        </a>
                    </button>
                </Buttons>
                <div>
                    <TextArea ref={TextAreaFocus} onChange={ConvertText} placeholder={Placeholder} value={Value}></TextArea>
                    <Preview dangerouslySetInnerHTML={{ __html: CodeToHtml(PreviewText) }} /> {/* 문자열의 html 태그를 출력 */}
                </div>
            </Wrapper>
            {Submit ? <PostBtn onClick={handleSubmit}>{SubmitBtnName}</PostBtn> : null}
        </div>
    );
};

export default TextBox;
