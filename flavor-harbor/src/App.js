// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Registration from "./Components/Pages/registration";
import Header from "./Components/Pages/Header";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Pages/Footer";
import UserProfile from "./Components/Pages/UserProfile";
import RecipeForm from "./Components/Pages/RecipeForm";
// import RecipeDetail from "./Components/Pages/RecipeDetail";
import RecipeFeedbackForm from "./Components/Pages/RecipeFeedbackForm";
import search from "./Components/Pages/search";
import Search from "./Components/Pages/search";

const App = () => {
  return (
    <div className="app-container">
      <Header /> {/* Header is always visible */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Loginpage" element={<LoginPage />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        {/* <Route path="/RecipeForm" element={<RecipeForm />} /> */}
        {/* <Route path="/RecipeDetail" element={<RecipeDetail />} /> */}
        <Route path="/RecipeFeedbackForm" element={<RecipeFeedbackForm />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
