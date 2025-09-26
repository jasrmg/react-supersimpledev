import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

import "./App.css";

const App = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="app-logo">
        <span className="logo-text">Credits</span>
        <span className="logo-highlight">SuperSimpleDev</span>
      </div>

      <div className="app-container">
        {chatMessages.length === 0 ? (
          <div
            className="chat-message-container"
            style={{ textAlign: "center" }}
          >
            Welcome to the chatbot project! Send a message using the textbox
            below.
          </div>
        ) : (
          <ChatMessages chatMessages={chatMessages} isLoading={isLoading} />
        )}

        <ChatInput
          isLoading={isLoading}
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  );
};

export default App;
