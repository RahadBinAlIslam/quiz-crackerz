import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const topics = useLoaderData();
  return (
    <div>
      <h2>This is Home: {topics.data.length}</h2>
    </div>
  );
};

export default Home;
