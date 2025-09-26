import { useState, useRef, useEffect } from "react";
import { Chatbot } from "supersimpledev";

import "./ChatInput.css";

const ChatInput = ({
  chatMessages,
  setChatMessages,
  isLoading,
  setIsLoading,
}) => {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [setChatMessages]);
  const saveInputText = (e) => {
    setInputText(e.target.value);
  };

  const sendMessage = async () => {
    if (isLoading) return;
    if (!inputText.trim()) return;
    if (isLoading) return;
    const newChatMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        key: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessage);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
        ...newChatMessage,
        {
          message: response,
          sender: "robot",
          key: crypto.randomUUID(),
        },
      ]);
    } finally {
      setIsLoading(false);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };
  const challenge = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    } else if (e.key === "Escape") {
      setInputText("");
    }
  };

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        className="chat-input"
        size="30"
        onChange={saveInputText}
        value={inputText}
        ref={inputRef}
        onKeyDown={challenge}
      />
      <button
        className="send-button"
        onClick={sendMessage}
        disabled={isLoading}
      >
        {isLoading ? "..." : "Send"}
      </button>
    </div>
  );
};

export default ChatInput;
