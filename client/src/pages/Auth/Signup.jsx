import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Auth.scss";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(username, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

//export default Signup;
