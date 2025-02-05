import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utlis/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { targetId } = useParams();
  const [messages, setMessages] = useState([{text:"Hello World"}]);
  const user = useSelector(store=>store?.user);
  const userId = user?._id


useEffect(()=>{
  const socket = createSocketConnection();

  socket.emit("joinChat",{userId,targetId})
},[])

  return (
    <div className="w-1/2 mx-auto border border-gray-500 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-700 ">Chat</h1>
      <div className="flex-1 overflow-scroll p-4">
        {/* Message Send */}

        {messages.map((msg, index) => {
          return (
            <div key={index} className="chat chat-start">
              <div className="chat-header">
                Logesh
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble ">You were Choosen</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
          );
        })}
      </div>
      <div className="p-3 border-t border-gray-600 flex gap-2 items-center">
        {/* Input Box */}
        <input className="flex-1 rounded-full text-white border border-gray-500 px-4 py-2"></input>
        <button className="btn btn-secondary">Send</button>
      </div>
    </div>
  );
};

export default Chat;
