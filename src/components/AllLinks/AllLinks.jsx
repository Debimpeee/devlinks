import React, { useState } from 'react'

const AllLinks = () => {
  const [linkList, setLinkList] = useState("Github")

  return (
    <div className='allLinks'>
      <label>
        Platform
        <select 
        value="linkList"
        onChange={e=> setLinkList(e.target.value)}>
          <option value="Github">Github</option>
          <option value="Frontend Mentor">Frontend Mentor</option>
          <option value="Twitter">Twitter</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Youtube">Youtube</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitch">Twitch</option>
          <option value="Dev.to">Dev.to</option>
          <option value="Codewars">Codewars</option>
          <option value="Codepen">Codepen</option>
          <option value="GitLab">GitLab</option>
          <option value="Hashnode">Hashnode</option>
          <option value="Stack Overflow">Stack Overflow</option>
        </select>
      </label>
    </div>
  )
}

export default AllLinks


















// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);
//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// export default function App() {


//   const [roomId, setRoomId] = useState('general');
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <label>
//         Choose the chat room:{' '}
//         <select
//           value={roomId}
//           onChange={e => setRoomId(e.target.value)}
//         >
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Close chat' : 'Open chat'}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   );
// }