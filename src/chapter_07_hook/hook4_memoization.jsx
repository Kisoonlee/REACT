import React, {useMemo} from "react";

const memoizedValue=useMemo(   
    ()=>{
        //연산량이 높은 작업을 수행하여 결과를 반환
        return computeExpensiveValue(Value1, Value2);
    },[Value1,Value2]
)
