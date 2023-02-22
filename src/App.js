import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import Navbar from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { FirebaseState } from "./context/firebase/firebaseState";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <AlertState>
      <FirebaseState>
        <Router>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </FirebaseState>
    </AlertState>
  );
}

export default App;
