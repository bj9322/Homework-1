import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/detail/1">Go to Detail Page with ID 1</Link>
    </div>
  );
}

export default Home;