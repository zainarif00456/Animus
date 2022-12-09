import './App.css';
import io from 'socket.io-client';
import {useState} from 'react'
import Chats from './pages/Chats';
import JoinRoom from './pages/JoinRoom';

const socket = io.connect("http://192.168.0.74:5025")
function App() {
  const [username, setusername] = useState("");
  const [roomid, setroomid] = useState("");
  const [connected, setconnected] = useState(false);
  const joinChat = () =>{
    if(username !== "" && roomid !== ""){
      socket.emit("join_chat", {user_name: username, room_id: roomid})
      setconnected(true);
    }

  }
  return (
    <>
      
      {// online if else statements
        connected? 
        (<Chats socket={socket} username={username} room={roomid} />):
        (<JoinRoom username={username} roomid={roomid} joinChat={joinChat} setroomid={setroomid} setusername={setusername}/>)
      }
      
    </>
  );
}

export default App;
