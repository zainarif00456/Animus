import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import {Link} from "react-router-dom"
function Chats(props) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: props.room,
        author: props.username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await props.socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      
    });
  }, [props.socket]);
// const backbtn = "<";
  return (
    <>
<nav className="navbar navbar-dark bg-dark mb-3">
  <div className="container-fluid">
    
      <font style={{color: "white"}}>
      <center>
    <h2>
      ANIMUS CHAT
    </h2>

   {/* <h3>
        <button className="btn btn-outline-dark" style={{color: "white", fontSize: "25px"}} 
        onClick={()=>{props.setconnected(false)}}
        > {backbtn} </button>
      </h3> */}
      </center>
      </font>
      
  </div>
</nav>



    <div className="container">
      <center>
    <div className="chat-window my-3">
      <div className="chat-header">
        <p>Room ID: {props.room}</p>
      </div>
      <div className="chat-header">
        <p>User Name: {props.username}</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={props.username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
        className="my-3"
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage} className='btn btn-outline-dark'>Send</button>
      </div>
    </div>
    </center>
    </div>
    </>
  );
}

export default Chats;