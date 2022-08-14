import React from "react";
import { Navigate } from "react-router-dom";

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <div>
      <h1>Welcome to devQuiz</h1>
      <p>Note: Only Admin is able to login and set tests while other users can only take tests. Thank you.</p>
    </div>
  );
}

export default Home;