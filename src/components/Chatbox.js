import React, { useState, useEffect, useRef } from 'react';
import './Chatbox.css';
import avatar from '../images/avatar.jpeg';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const messagesEndRef = useRef(null); 

 
  const toggleChatBox = () => {
    if (isOpen) {

      setIsFadingOut(true);

    
      setTimeout(() => {
        setIsOpen(false);
        setIsFadingOut(false); 
      }, 500); 
    } else {
    
      setIsOpen(true);
    }
  };


  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);


  const sendMessage = async () => {
    if (!message.trim()) return;
  
    const newUserMessage = { role: 'user', message };
    setChatHistory((prevHistory) => [...prevHistory, newUserMessage]);
    setMessage(''); 
  
    try {
      const response = await fetch('https://server-for-website.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      const data = await response.json();
  
      const newModelMessage = { role: 'model', message: data.modelMessage.message };
      setChatHistory((prevHistory) => [...prevHistory, newModelMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat-container">
      {isOpen ? (
        <div className={`chat-box ${isFadingOut ? 'fade-out' : ''}`}>
          <div className="chat-header">
            <button onClick={toggleChatBox} className="close-button">X</button>
            <div className='title-avatar'>
              <div className="avatar-holder-chatbox">
                <img src={avatar} alt="Greyston Bellino" />
              </div>
              <div style={{ width: "100%" }}>
                <h4>Chat with me!</h4>
              </div>
            </div>
          </div>
          <div className="chat-body">
            <div className='message model'><p>Hello, ask me any question!</p></div>
            {chatHistory.map((entry, index) => (
              <div key={index} className={`message ${entry.role}`}>
                <p>{entry.message}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="send-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12L22 2L17 12L22 22L2 12Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="chat-toggle" onClick={toggleChatBox}>
          <svg viewBox="45 60 400 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#fff"
              d="M 90 210 
       C 90 190 90 160 100 160 
       C 140 160 160 160 180 160 
       C 180 160 300 160 300 160 
       C 320 160 340 160 380 160 
       C 390 160 390 180 390 210 
       C 390 230 390 250 380 260 
       C 340 260 320 260 300 260 
       C 300 260 180 260 180 260 
       C 160 260 140 260 100 260 
       C 90 250 90 230 90 210"
              mask="url(#knockout-text)"
            ></path>
            <mask id="knockout-text">
              <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
              <text x="60%" y="65%" fill="#000" textAnchor="middle" dominantBaseline="middle">Chat with Greys AI</text>
            </mask>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
