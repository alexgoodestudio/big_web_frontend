import React, { useState, useEffect } from 'react';
import { listSubscribers, deleteSubscriber } from '../utils/api';


const SubscriberTable = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [error, setError] = useState(null);
  const [deleteCount, setDeleteCount] = useState(0); // Step 1: Add deletion count state

// The actual delete count does not matter. Purpose of writing this in is to create a state change that can be added into the useEffect to cause it to run since.
// EX. if this line from the useEffect had an empty array it would only run on intial render or when the component mounts:   }, [deleteCount]); 
// Now that the deleteCount stae is the parameter, every state change it will run.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listSubscribers(); 
        setSubscribers(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [deleteCount]); 

  async function handleDelete(subscriber_id) {
    const abortController = new AbortController();
    const deleteUser = window.confirm("Would you like to delete Subscriber?");
    if (deleteUser) {
      try {
        setError(null);
        const response = await deleteSubscriber(subscriber_id, abortController.signal);
        setDeleteCount(count => count + 1); // Step 2: Increment deletion count after successful delete
        if (!response) {
          console.log(`Subscriber with ID ${subscriber_id} not found or already deleted.`);
        }
      } catch (err) {
        setError(err.message);
        console.log(error);
      }
    }
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className='display-6 mb-3'> Subscriber List</div>
        {subscribers.map((subscriber, index) => (
          <div className="col-md-12 mb-3" key={index}>
            <div className="card">
              <div className="card-body">                
                <p className="card-text"><span className='text-bold'>Name:</span> {subscriber.name} </p>
                <p className="card-text"><span className='text-bold'>Email Address:</span>  {subscriber.email_address} </p>
                <p className="card-text"><span className='text-bold'>Type:</span>  {subscriber.found_type} </p>
  
                <button onClick={() => handleDelete(subscriber.subscriber_id)} className="btn btn-outline-danger ms-2">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
          </div>
  );
};

export default SubscriberTable;
