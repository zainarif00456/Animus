import './App.css';
import io from 'socket.io-client';
import {useState} from 'react'
import Chats from './pages/Chats';
import JoinRoom from './pages/JoinRoom';
// import { Routes, Route } from 'react-router-dom';

const socket = io.connect("http://192.168.10.9:5025")
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
        (<JoinRoom setconnected={setconnected} username={username} roomid={roomid} joinChat={joinChat} setroomid={setroomid} setusername={setusername}/>)
      }
      {/* <Routes>
        <Route path='/' element={<JoinRoom username={username} roomid={roomid} joinChat={joinChat} setroomid={setroomid} setusername={setusername} />}>
        </Route>
        <Route path='/chat' element={<Chats socket={socket} username={username} room={roomid}/>}>
        </Route>
      </Routes> */}

    </>
  );
}

export default App;
