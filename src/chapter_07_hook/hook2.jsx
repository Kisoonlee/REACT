import React,{userState,useEffect, useState} from "react";

function Counter(props){
    const [count,setCount]=useState(0);

    //componentDidMount, componentDidUpdate와 유사하게 작동
    useEffect(
        ()=>{
            //브라우저 API를 사용해서 document의 title을 업데이트
            document.title=`You clicked ${count} times`;
        }
    );

    return (
        <div>
            <p>
                총 {count}번 클릭했습니다.
            </p>
            <button onClick={()=>setCount(count+1)}>
                클릭
            </button>
        </div>
    );
}