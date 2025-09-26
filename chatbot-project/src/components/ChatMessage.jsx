import dayjs from "dayjs";

import RobotProfileImg from "../assets/robot.jpg";
import UserProfileImg from "../assets/nagi.jpg";

import "./ChatMessage.css";

const ChatMessage = ({ message, sender }) => {
  const time = dayjs().format("h:mma");

  return (
    <div
      className={`chat-message ${
        sender === "user" ? "chat-message-user" : "chat-message-robot"
      }`}
    >
      {sender === "robot" && (
        <img src={RobotProfileImg} className="chat-message-profile" />
      )}
      <div className="chat-message-content">
        <div className="chat-message-text">{message}</div>
        <div className="chat-message-time">{time}</div>
      </div>
      {sender === "user" && (
        <img src={UserProfileImg} className="chat-message-profile" />
      )}
    </div>
  );
};

export default ChatMessage;
