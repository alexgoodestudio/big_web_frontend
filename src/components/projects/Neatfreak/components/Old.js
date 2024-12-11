// import React, { useState } from 'react';
// import './Dashboard.css'; // Ensure this file contains the necessary CSS for the typing/loading effect
// import { listResponse } from '../utils/api';

// function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputData, setInputData] = useState('');
//   const [error, setError] = useState('');
//   const [response, setResponse] = useState('');
//   const [messageSent, setMessageSent] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [visible, setVisible] = useState(false);
//   const [pastMessage, setPastMessage] = useState([])

//   function toggleChat() {
//     setIsOpen(!isOpen);
//   }

//   const now = new Date();
//   const currentDateTime = now.toLocaleString().split(',');
//   const time = currentDateTime[1];

//   function handleChange(event) {
//     setInputData(event.target.value);
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const abortController = new AbortController();
//     setMessageSent(true);
//     setIsTyping(true);
//     try {
//       const data = await listResponse(inputData, abortController.signal);
//       setPastMessage(inputData)
//       setVisible(!visible)
//       setResponse(data.responses);
//       setInputData(''); 
      
//       setTimeout(() => {
//         setIsTyping(false);
//       }, 1000); 
//     } catch (error) {
//       setError("Hmm... I don't think I understand");
//       console.error(error);
//       setIsTyping(false); 
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <button className="chatbot-toggle" onClick={toggleChat}>
//         Chat with us!
//       </button>
//       {isOpen && (
//         <div className="chatbot-interface">
//           <h5 className='mb-0 pb-2 pt-3 chatbot-header-background'> NeatFreak Customer Support</h5>
//           <hr className='mt-0'/>
//           <div className="messages-container">
//           {error && <p className="text-dark alert alert-danger mx-2 my-4">{error}</p>}
//           {visible &&( 
//           <p className='m-0'>
//           <span className="borderUser alert alert-primary m-0 ">
//                 <span className="time">{time}</span>
//                 {pastMessage}
//               </span>
//           </p>
//           )}
//           {messageSent && !isTyping && (
//             <p className="">
//               <br />
//               <span className="borderChatbot alert alert-secondary">
//                 <span className="time">{time}</span>
//                 {response}
//               </span>
//             </p>
//           )}
//           {isTyping && <div className="loading-bubble">...</div>}
//           <form className="chatInput d-flex" onSubmit={handleSubmit}>
//             <input
//               className="form-control"
//               type="text"
//               onChange={handleChange}
//               value={inputData}
//               name="message"
//               placeholder="Type your message..."
//             />
            
//             <button type="submit" className="btn btn-secondary">
//               Send
//             </button>
//           </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chatbot;