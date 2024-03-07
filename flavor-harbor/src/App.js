import React, { useState } from "react";

import Header from "./Components/Pages/Header";
import Footer from "./Components/Pages/Footer";
import Login from "./Components/Pages/LoginPage";
import Registration from "./Components/Pages/registration";
import Homepage from "./Components/Pages/Homepage";

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true); // State variable to track whether the user is in the login page

  // Function to switch between registration and login pages
  const togglePage = () => {
    setIsLoginPage((prevState) => !prevState);
  };

  return (
    <div className="app-container">
      <Header />
      <Homepage />
      {isLoginPage ? (
        <Login togglePage={togglePage} />
      ) : (
        <Registration togglePage={togglePage} />
      )}
      <Footer />
    </div>
  );
};

export default App;
