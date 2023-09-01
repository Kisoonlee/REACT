import React from "react";
import Notification from "./Notification";

const reservedNotifications=[
    {id:1, message: "점심식사 시간",},
    {id:2, message: "오늘의 일정을 알려드립니다.",},
    {id:3, message: "이제 곧 미팅이 시작됩니다.",},
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notifications: [],
        };
    }

    componentDidMount() {

        const { notifications } = this.state;
        timer= setInterval(()=>{
            if(notifications.length < reservedNotifications.length){
                const index=notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notification: notifications,
                });
            }else {
                this.setState(
                    {
                        notifications: [],
                    }
                );
                clearInterval(timer);
            }
        },1000
        );
    }

    render(){
        return (
            <div>
                
                {
                    this.state.notifications.map((notification) => {
                        console.log(notification.message);
                        return <Notification key={notification.id}
                            id={notification.id}
                            message={notification.message} 
                        />;
                    }
                    )
                }
                
            </div>
        );
    }
}
export default NotificationList;