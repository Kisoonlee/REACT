import React,{useState,useEffect} from "react";

function UserStatus(props){
    const [isOnline,setIsOnline]=useState(null);

    useEffect(
        ()=>{
            function handleStatusChange(status){
                setIsOnline(status.isOnline);
            }
            ServerAPI.subscribeUserStatus(props.user.id,handleStatusChange);
            return ()=>{
                ServerAPI.unsubscribeUserStatus(props.user.id,handleStatusChange)
            };
            
        }
    );

    if(isOnline === null){
        return '대기중';
    }
    //return isOnline?'온라인':'오프라인';
    // 또는
    return (
        <li style={{color: isOnline ? 'green':'black'}}>
            {props.user.name}
        </li>
    );
}

function useUserStatus(userId){
    const [isOnline,setIsOnline]=useState(null);

    useEffect(
        ()=>{
            function handleStatusChange(status){
                setIsOnline(status.isOnline);
            }
            ServerAPI.subscribeUserStatus(userid,handleStatusChange);
            return ()=>{
                ServerAPI.unsubscribeUserStatus(userid,handleStatusChange);
            }
        }
    );

    return isOnline;
}

// Custom Hook 사용하기

function UserStatus2(props){
    const isOnline = useUserStatus(props.userid);
    if (isOnline=== null){
        return '대기중...';
    }
    return isOnline? '온라인':'오프라인';
}


function UserListItem(props){
    const isOnline =UserStatus(process.user.id);
    
    return(
        <li style={{color: isOnline?'green':'black'}}>
            {props.user.name}
        </li>
    );

}

// HOOK의 데이터 공유

const userList=[
    {id:1,anem:'min'},
    {id:2,anem:'nin'},
    {id:3,anem:'jin'},
];

function ChangeUserSelector(props){
    const [userId,setUserId]=useState(1);
    const isUserOnline=useUserStatus(userId);

    return (
        <>
        
        </>
    );

}