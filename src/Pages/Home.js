import React, { useState } from "react";
import Exercises from "../Components/Exercises";
import SearchExercises from "../Components/SearchExercises";
import HeroBanner from "../Components/HeroBanner";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </>
  );
};

export default Home;
