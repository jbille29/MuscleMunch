import { database } from '../firebase-config';
import { ref, push } from "firebase/database";
import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailsRef = ref(database, 'emails');
      await push(emailsRef, { email: email, timestamp: Date.now() });
      alert("Email submitted successfully!");
      setEmail(''); // Clear the input after successful submission
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Join our Waitlist</button>
    </form>
  );
};

export default SignupForm;
