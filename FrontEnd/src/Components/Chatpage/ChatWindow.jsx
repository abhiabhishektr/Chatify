// ChatWindow.jsx
import React from 'react';

function ChatWindow({ messages, newMessage, setNewMessage, handleSendMessage, selectedUser }) {
  return (
    <div className="flex-1 flex flex-col bg-gray-900 p-4">
      <div className="bg-gray-800 p-4 rounded-t-lg">
        <h2 className="text-lg font-bold">{selectedUser?.name}</h2>
      </div>
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-lg text-white max-w-xs ${
              message.senderId === 'You' ? 'bg-blue-500 self-end ml-auto' : 'bg-gray-700 self-start mr-auto'
            }`}
          >
            <span>{message.content}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 bg-gray-800 rounded-b-lg">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 mr-2 rounded-lg bg-gray-700 border-none text-white"
          placeholder="Write a message"
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-blue-500 rounded-full hover:bg-blue-400"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7M5 13l-4 4m9-5h10m-9-5h10"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
