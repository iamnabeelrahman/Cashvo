import { useState } from "react";
import "./App.css";
import Signup from "./pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";

{/* <h1 className="bg-green-400 text-white p-4 rounded-xl">Hello world!</h1> */}
function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
         <Route path="/signin" element={<Signin />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
