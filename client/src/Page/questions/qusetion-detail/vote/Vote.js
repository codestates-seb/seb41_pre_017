const Vote = () => {
    return (
        <div className={'vote-cell'}>
            {/*추천 비추천 버튼 섹션*/}
            <div className={'voting-container'}>
                {/*추천 버튼*/}
                <button className={'vote-up-button'}>
                    <svg aria-hidden="true" className="svg-icon iconArrowUpLg" width="36"
                         height="36" viewBox="0 0 36 36">
                        <path d="M2 25h32L18 9 2 25Z"></path>
                    </svg>
                </button>
                {/*추천 갯수*/}
                <div className={'voted-number'}>5</div>
                {/*비추천 버튼*/}
                <button className={'vote-down-button'}>
                    <svg aria-hidden="true" className="svg-icon iconArrowDownLg" width="36"
                         height="36" viewBox="0 0 36 36">
                        <path d="M2 11h32L18 27 2 11Z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
};

export default Vote;