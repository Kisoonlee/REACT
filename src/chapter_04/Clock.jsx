import React, { Profiler } from "react";

function Clock(props){
    return (
        <div>
            <h1>안녕, 리액트!!</h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}
export default Clock;



function App(props){
    return (
        <Profile
            name="소플"
            introduction="안녕하세요, 소플입니다."
            viewCount={1500}
        />
    );
}

function App2(props){
    return(
        <Layout 
        width={2560}
        height={1440}
        header={
            <header title="소플릥블로그"/>
        }
        footer={
            <footer />
        }
        />
    );
}

React.createElement(
    Profile,
    {
        name: "소플",
        introduction : "Hi this is webpage by seople",
        viewCount: 1500
    }
)

function Welcome(props){
    return <hi>안녕, {props.name}</hi>;
}


