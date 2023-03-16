import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import { fetchData, exerciseOptions } from "./fetchData";
import { Box } from "@mui/material";
import BodyPart from "../Components/BodyPart";
import ExerciseCard from "../Components/ExerciseCard";

function TestCarousel({ data, bodyPart, setBodyPart, isBodyParts }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [bodyParts, setBodyParts] = useState([]);

  const fetchExerciseData = async () => {
    const bodyPartsData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      exerciseOptions
    );
    setBodyParts((prev) => [...prev, ...bodyPartsData]);
  };
  useEffect(() => {
    fetchExerciseData();
  }, []);
  console.log(bodyParts, "bodyParts");
  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {bodyParts.map((item) => (
          <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">
            {isBodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default TestCarousel;
