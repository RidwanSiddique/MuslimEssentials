import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter, Outlet, Navigate, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Products } from "./pages/Products/Products";
import { Login } from "./pages/Auth/Login";
import { Signup } from "./pages/Auth/Signup";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import "./app.scss";

// Layout component to wrap Navbar, Footer & page content
const Layout = () => {
  const location = useLocation();
  
  // Pages where Navbar and Footer should NOT be shown
  const authPages = ["/login", "/signup"];

  return (
    <div className="app">
      {!authPages.includes(location.pathname) && <Navbar />}
      <Outlet />
      {!authPages.includes(location.pathname) && <Footer />}
    </div>
  );
};

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { 
        path: "/profile", 
        element: <ProtectedRoute><h1>Profile Page (Protected)</h1></ProtectedRoute> 
      },
    ],
  },
]);

// App Component
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
