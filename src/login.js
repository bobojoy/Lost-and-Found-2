import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page redirection
import "../App.css"; // Assuming you are using global styles from App.css

function Login() {
  const [email, setEmail] = useState(''); // State for storing email input
  const [password, setPassword] = useState(''); // State for storing password input
  const [error, setError] = useState(null); // State for handling error messages
  const navigate = useNavigate(); // Declare useNavigate hook to handle page navigation

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Sending POST request to the server for login
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), // Send the email and password to the server
    })
      .then((r) => {
        if (r.ok) {
          // If the response is OK (status 200-299), process the response
          r.json().then(() => {
            // Redirect the user to the homepage (or another page) after successful login
            setTimeout(() => {
              navigate('/'); // You can redirect to '/dashboard' or wherever the user should go
            }, 1000); // Delay navigation by 1 second (optional)
          });
        } else {
          // If there's an error from the server, display the error message
          r.json().then((err) => setError(err.error || 'Login failed')); // Use fallback error message if none exists
        }
      })
      .catch(() => {
        // Catch any network errors or unexpected errors
        setError('An unexpected error occurred');
      });
  };

  return (
    <div id="login-form-container">
      <form onSubmit={handleSubmit} id="login-form">
        <h1>Log in</h1>

        {/* Input for email */}
        <input
          type="email" // Type changed to 'email' for better validation
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state with user input
          className="login-input"
          placeholder="Enter email"
          aria-label="Email"
        />
        
        {/* Input for password */}
        <input
          type="password" // Keep password input type for security
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update state with user input
          className="login-input"
          placeholder="Enter password"
          aria-label="Password"
        />

        {/* Submit Button */}
        <button type="submit" id="login-submit-button">Log in</button>

        {/* Navigation Button to Sign Up page */}
        <button type="button" onClick={() => navigate('/signup')} id="signup-link-button">Sign up</button>

        {/* Navigation Button to go back to the homepage */}
        <button type="button" onClick={() => navigate('/')} id="back-button">Back</button>

        {/* Display error message if any */}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
