import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";

import RobotProfileImg from "../assets/robot.jpg";
import LoaderGif from "../assets/loading-spinner.gif";
import "./ChatMessages.css";

const ChatMessages = ({ chatMessages, isLoading }) => {
  const useAutoScroll = (dependencies) => {
    const containerRef = useRef(null);
    useEffect(() => {
      const containerElem = containerRef.current;
      if (containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight;
      }
    }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

    return containerRef;
  };

  const chatMessagesRef = useAutoScroll([chatMessages, isLoading]);

  return (
    <div className="chat-message-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.key}
          />
        );
      })}
      {isLoading && (
        <div className="chat-message-robot">
          <img src={RobotProfileImg} className="chat-message-profile" />
          <img src={LoaderGif} alt="loading..." style={{ width: "40px" }} />
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
