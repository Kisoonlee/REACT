function Welcome(props){
    return <h1>안녕, {props.name}</h1>;
}

const element=<Welcome name="인제" />;
ReactDom.render(
    element,
    document.getElementById('root')
);