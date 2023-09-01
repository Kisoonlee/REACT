import React,{useCallback, useRef,useState} from "react";

const refContainer = useRef(초기값);

const inputElem = userRef(null);

const onButtonClick = () =>{
    // Current는 마운트 된 input element를 가리킴
    inputElem.current.focus();
};

return(
    <>
        <input ref={inputElem} type="text" />
        <button onClick={onButtonClick}>
            Focus the input
        </button>
    </>
);


function MeasureExample(props){
    const [height, setHeight] = useState(0);
    const measureRef = useCallback(
        node=>{
            if(node !==null){
                setHeight(node.getoundingClientRect().height);
            }
        },[]
    );

    return (
        <>
            <h1 ref={measureRef}>
                Hi, React
            </h1>
            <h2>
                위 헤더의 높이는 {Math.round(height)}px 입니다.
            </h2>
        </>
    )
}