const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }
    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };
    return confirmAction;
  };

  
// useConfirm은 파라미터로는 message와 callback 함수로 onConfirm(확인 눌렀을 때), onCancel(취소 눌렀을 때)를 받습니다.
// 그리고 confirm의 return 값이 true일 경우 onConfirm 이 반환, 아닐 경우 onCancel이 반환됩니다.


   
  export default useConfirm;