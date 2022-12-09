import React from 'react'

function JoinRoom(props) {
  return (
    <>
<nav className="navbar navbar-dark bg-dark mb-3">
  <div className="container-fluid">
    
      <font style={{color: "white"}}>
      <center>
   <h1>
        Animus Chat Application
      </h1>
      </center>
      </font>
      
  </div>
</nav>



   <div className="container">
    
   </div>
      
      <div className='container'>
      <div className="form-floating mb-3">
  <input type="text" placeholder="Enter Username" onChange={(event)=>{props.setusername(event.target.value)}} className="form-control" id="floatingInput"/>
  <label for="floatingInput">User Name</label>
</div>
<div className="form-floating">
  <input type="text" placeholder="Enter Room ID" onChange={(event)=>{props.setroomid(event.target.value)}} className="form-control" id="floatingPassword"/>
  <label for="floatingPassword">Room ID</label>
</div>
<div className='container my-3'>
  <center>
<button className='btn btn-outline-success' onClick={props.joinChat}>Join Room</button>
</center>
</div>
</div>

      </>
    )
}

export default JoinRoom