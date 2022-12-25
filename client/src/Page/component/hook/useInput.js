import { useState } from 'react';

// 1번쨰 인자로 초기값, 2번쨰 인자로 버튼눌렀을때 서버에 전송하는 이벤트 함수
const useInput = (initialValue = '', onSubmit) => {
    const [inputValue, setInputValue] = useState(initialValue);
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = () => {
        setInputValue('');
        onSubmit(inputValue);
    };
    return [inputValue, handleChange, handleSubmit];
};

export default useInput;
