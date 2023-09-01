import React,{useCallback,useState} from "react";


// 의존성 배열의 값이 변한 경우 
// useCallback(함수,의존성 배열);
// useMome(()=>한수,의존성 배열);
const memoizedCallback = useCallback(
    ()=>{
        //의존성 배열의 값이 바뀐 경우 반환
        doSomething(value1,value2);
    },
    [value1,value2]    
);

// 1. 부모 콤포넌트가 렌더링 될 때마다 다시 렌더링 된다.
function ParentComponent(props){
    const[count,setCount]=useState(0);

    //재렌더링 될 때마다 매번 함수가 새로 정의됨
    const handleClick = (event) => {
        //클릭 이벤트 처리
    };

    return (
        <div>
            <button
                onClick={
                    ()=>{
                        setCount(count+1);
                    }
                }
            >
                {count}
            </button>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
}

function ParentComponentUseCallback(props){
    // 컴포넌트가 마운트 될 때만 함수가 정의됨
    const[count,setCount]=useState(0);

    const handleClick=useCallback(
        (event)=>{
            //클릭이벤트
        },[]
    );

    return(
        <div>
            <button
                onClick={
                    ()=>{
                        setCount(count+1);
                    }
                }
            >
                {count}
            </button>
            <ChildComponent handleClick={handleClick} />
        </div>
    );
}