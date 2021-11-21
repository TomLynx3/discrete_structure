import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import ExerciseSwitcher from "../homework_1/ExerciseSwitcher";
import Exercise5_1 from "./Exercise5_1";
import Exercise5_2 from "./Exercise5_2";
import Exercise5_3 from "./Exercise5_3";

interface Exercise {
  name: string;
}
const exercies: Exercise[] = [
  { name: "1.Uzdevums" },
  { name: "2.Uzdevums" },
  { name: "3.Uzdevums" },
];

const HomeWork5 = () => {
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
        return <Exercise5_1></Exercise5_1>;
      case 1:
        return <Exercise5_2></Exercise5_2>;
      case 2:
        return <Exercise5_3></Exercise5_3>;
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
            length={2}
          ></ExerciseSwitcher>
        </Grid>
      </Grid>
      {getExercise()}
    </Grid>
  );
};

export default HomeWork5;
