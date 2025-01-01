import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.css'; 
import { listResponse } from '../utils/api';
import { FaComments } from "react-icons/fa";
import Img1 from "./Images/customersupport.svg"
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputData, setInputData] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pastMessages, setPastMessages] = useState([])
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pastMessages]);

  function toggleChat() {
    setIsOpen(!isOpen);
  }

  // const now = new Date();
  // const currentDateTime = now.toLocaleString().split(',');
  // const time = currentDateTime[1];
  
  function handleChange(event) {
    setInputData(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const currentTime = new Date().toLocaleTimeString();
    const newMessage = { text: inputData, sender: 'user', time: currentTime }; 
    setIsTyping(true);
    try {
      setPastMessages(pastMessages => [...pastMessages, newMessage]);
      
      const data = await listResponse(inputData, abortController.signal);
      const responseMessage = { text: data.responses, sender: 'chatbot', time: currentTime };
      
  
      setInputData(''); 
      
      setTimeout(() => {
        setPastMessages(pastMessages => [...pastMessages, responseMessage]);
        setIsTyping(false);

      }, 1200); 
    } catch (error) {
      setTimeout(() => {
      console.error(error);
      setIsTyping(false);
      const errorMessage = { text: "Hmm... I don't think I understand", sender: 'error', time: currentTime }; 
      setPastMessages(pastMessages => [...pastMessages, errorMessage]);
    }, 1200); 
    }
  };
  
  return (
    <div className="chatbot-container">
<button className="chatbot-toggle text-white p-3 italic2" onClick={toggleChat}>
  <FaComments /> Chat with us!
</button>
      {isOpen && (
        <div className="chatbot-interface">
          <h5 className='text-dark mb-0 pb-2 pt-3 chatbot-header-background'>NeatFreak Customer Support</h5>
          
          <hr className='mt-0'/>
          <div className="messages-container">
            {pastMessages.map((message, index) => (
              
              <p key={index} className={message.sender === 'user' ? "user-message" : "chatbot-message"}>
                <span className={message.sender === 'user' ? "borderUser alert alert-primary textuser" : "borderChatbot alert alert-secondary textbot"}>
               
                  <span className="time">{message.time}</span>
                  {message.text}
                </span>
              </p>
              
            ))}
            <div ref={messagesEndRef} />
            {isTyping && <div className="loading-bubble">...</div>}
          </div>
          <form className="chatInput d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              value={inputData}
              name="message"
              placeholder="Type your message..."
              autocomplete="off"
            />
            <button type="submit" className="btn btn-secondary  ms-2">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;