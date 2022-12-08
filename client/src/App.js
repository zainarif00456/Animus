import './App.css';
import io from 'socket.io-client';
import {useState} from 'react'
import Chats from './pages/Chats';

const socket = io.connect("http://localhost:5025")
function App() {
  const [username, setusername] = useState("");
  const [roomid, setroomid] = useState("");
  const joinChat = () =>{
    if(username !== "" && roomid !== ""){
      socket.emit("join_chat", {user_name: username, room_id: roomid})
    }

  }
  return (
    <>
      <h1>
        Animus Chat Application
      </h1>
      <h3>
        Join Room
      </h3>
      <input type="text" placeholder="Enter Username" onChange={(event)=>{setusername(event.target.value)}}/>
      <input type="text" placeholder="Enter Room ID" onChange={(event)=>{setroomid(event.target.value)}}/>
      <button onClick={joinChat}>Join</button>
    <Chats socket={socket} username={username} room={roomid} />
    </>
  );
}

export default App;
