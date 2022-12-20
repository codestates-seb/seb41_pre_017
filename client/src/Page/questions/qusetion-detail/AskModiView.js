const AskModiView = () => {
    return (
        <div className={'asked-modified-viewed-container'}>
            {/*게시글 수정일, 게시일, 본 사람 수 섹션*/}
            <div className={'asked-container'}>
                <span className={'amv-title'}>Asked</span>
                <span className={'amv-date'}>today</span>
            </div>
            <div className={'modified-container'}>
                <span className={'amv-title'}>Modified</span>
                <span className={'amv-date'}>today</span>
            </div>
            <div className={'viewed-container'}>
                <span className={'amv-title'}>Viewed</span>
                <span className={'viewed-time'}>7 times</span>
            </div>
        </div>
    )
};

export default AskModiView;