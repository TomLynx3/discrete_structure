import { Typography, Grid } from "@mui/material";
import { useState } from "react";
import ExerciseSwitcher from "../homework_1/ExerciseSwitcher";
import Exercise6_1 from "./Exercise6_1";

interface Exercise {
  name: string;
}
const exercies: Exercise[] = [{ name: "1.Uzdevums" }];

const HomeWork6 = () => {
  const [currentExercise, setCurrentExercise] = useState(0);

  const handleNextEx = (): void => {
    if (currentExercise !== exercies.length - 1) {
      setCurrentExercise(currentExercise + 1);
    }
  };

  const handlePrevEx = (): void => {
    if (currentExercise !== 0) {
      setCurrentExercise(currentExercise - 1);
    }
  };

  const getExercise = () => {
    switch (currentExercise) {
      case 0:
        return <Exercise6_1></Exercise6_1>;
    }
  };
  return (
    <Grid container>
      <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={9}>
          <Typography variant="h2" component="h2">
            {exercies[currentExercise].name}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <ExerciseSwitcher
            nextEx={handleNextEx}
            currentEx={currentExercise}
            prevEx={handlePrevEx}
            length={0}
          ></ExerciseSwitcher>
        </Grid>
      </Grid>
      {getExercise()}
    </Grid>
  );
};

export default HomeWork6;
