import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 🌿 I'm Bloom AI. What are you looking for today?"
    }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) {
      return;
    }

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage
      }
    ]);

    setMessage("");
    setLoading(true);

    try {
     const response = await fetch(
            "http://localhost:8000/api/chat/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userMessage
          })
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: data.reply
          }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Sorry 🌸 I couldn't connect to my AI service right now."
          }
        ]);

        console.error("Chatbot error:", data);
      }
    } catch (error) {
      console.error("Chatbot connection error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I'm having trouble connecting right now. Please try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}

      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "×" : "✨"}
      </button>

      {/* Chat Window */}

      {isOpen && (
        <div className="chatbot-window">

          <div className="chatbot-header">
            <div>
              <h3>Bloom AI 🌿</h3>
              <span>Your shopping buddy</span>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">

            {messages.map((item, index) => (
              <div
                key={index}
                className={
                  item.sender === "user"
                    ? "message user-message"
                    : "message bot-message"
                }
              >
                {item.text}
              </div>
            ))}

            {loading && (
              <div className="message bot-message">
                Thinking... 🌸
              </div>
            )}

          </div>

          <div className="chatbot-input-area">

            <input
              type="text"
              placeholder="Ask me anything..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={sendMessage}>
              →
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;