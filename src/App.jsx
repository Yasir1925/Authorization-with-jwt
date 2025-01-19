import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Signup from "./components/Signup"
import Login from "./components/Login"
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
function App() {
  return (
    <BrowserRouter>
      <Toaster reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App

