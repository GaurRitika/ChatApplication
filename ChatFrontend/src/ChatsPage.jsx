import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height:'100vh',width:'100vw'}}>
<PrettyChatWindow
projectId = '2bc47e12-123c-440c-8752-425c91c41ced'
username = {props.user.username}
secret = {props.user.secret}
style= {{height:'100%'}}

></PrettyChatWindow>
        </div>
    )
  };
  export default ChatsPage;