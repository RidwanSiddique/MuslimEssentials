import { createContext, useState } from "react";
import { makeRequest } from "../makeRequest";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [loading, setLoading] = useState(false);
  
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await makeRequest.post("/auth/local", {
        identifier: email,
        password,
      });
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("jwt", res.data.jwt);
    } catch (err) {
        console.error("Login error:", err.response ? err.response.data : err.message);
        throw new Error(err.response?.data?.error?.message || "Login failed");
    }
    setLoading(false);
  };

  const signup = async (username, email, password) => {
    setLoading(true);
    try {
      const res = await makeRequest.post("/auth/local/register", {
        username,
        email,
        password,
      });
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("jwt", res.data.jwt);
    } catch (err) {
        console.error("Signup error:", err.response ? err.response.data : err.message);
        throw new Error(err.response?.data?.error?.message || "Signup failed");
    }
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
