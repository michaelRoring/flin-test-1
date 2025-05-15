import { useState, useEffect, useRef } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "admin";
  timestamp: number;
}

interface ChatbotProps {
  toggle: () => void;
}

console.log(" import.meta.env.VITE_API_URL :", import.meta.env.VITE_API_URL);
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

export default function Chatbot({ toggle }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAdminResponse = async (userInput: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const adminMessage: Message = {
        id: Date.now().toString() + "_admin",
        text: data.reply,
        sender: "admin",
        timestamp: Date.now(),
      };
      setMessages((prevMessages) => [...prevMessages, adminMessage]);
    } catch (error) {
      console.error("Failed to send message to backend:", error);
      const errorMessage: Message = {
        id: Date.now().toString() + "_admin_error",
        text: "Sorry, I couldn't connect to the server. Please try again later.",
        sender: "admin",
        timestamp: Date.now(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newUserMessage: Message = {
      id: Date.now().toString() + "_user",
      text: input,
      sender: "user",
      timestamp: Date.now(),
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    handleAdminResponse(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendButtonClick = () => {
    handleSendMessage();
  };

  function formatTimestampToHourMinute(timestamp: number) {
    const numericTimestamp = Number(timestamp);

    const date = new Date(numericTimestamp);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedMinutes = String(minutes).padStart(2, "0");

    return `${hours}.${formattedMinutes}`;
  }

  return (
    <div
      className="fixed bottom-6 right-6 
                 w-96 
                 h-[500px] 
                 bg-white // Changed background for better contrast with message bubbles
                 shadow-xl 
                 rounded-lg 
                 flex flex-col 
                 p-4 
                 z-40"
    >
      <div className="flex justify-between items-center w-full mb-4 pb-2 border-b border-gray-300">
        <h1 className="text-xl font-bold text-gray-800">FLIN Chat</h1>
        <button
          onClick={toggle}
          className="text-gray-500 hover:text-gray-800"
          aria-label="Close chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="flex-grow w-full overflow-y-auto mb-4 flex flex-col space-y-2 pr-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-xl max-w-[75%] break-words ${
              message.sender === "user"
                ? "bg-blue-500 text-white self-end rounded-br-none"
                : "bg-gray-200 text-gray-800 self-start rounded-bl-none"
            }`}
          >
            {message.sender === "user" ? (
              <span className="text-xs text-blue-200">You</span>
            ) : (
              <span className="text-xs text-slate-500">Flin Admin</span>
            )}
            <div>
              <span>{message.text}</span>
              <br />
            </div>
            <div
              className={`text-xs pt-4 font-mono ${
                message.sender === "user" ? "text-blue-200" : "text-slate-500"
              }`}
            >
              {formatTimestampToHourMinute(message.timestamp)}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="w-full flex gap-2 pt-2 border-t border-gray-300">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendButtonClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150"
          disabled={input.trim() === ""}
        >
          Send
        </button>
      </div>
    </div>
  );
}
