import { Typography, Grid } from "@mui/material";
import { useState } from "react";
import ExerciseSwitcher from "../homework_1/ExerciseSwitcher";
import Exercise4_2 from "./Exercice4_2";
import Exercise4_1 from "./Exercise4_1";

interface Exercise {
  name: string;
}
const exercies: Exercise[] = [{ name: "1.Uzdevums" }, { name: "2.Uzdevums" }];

const HomeWork4 = () => {
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
        return <Exercise4_1></Exercise4_1>;
      case 1:
        return <Exercise4_2></Exercise4_2>;
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
            length={1}
          ></ExerciseSwitcher>
        </Grid>
      </Grid>
      {getExercise()}
    </Grid>
  );
};

export default HomeWork4;
