import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ExerciseSwitcher from "./ExerciseSwitcher";
import Exercise1 from "./Exercise_1";
import Exercise2 from "./Exercise_2";
import Exercise3 from "./Exercise_3";

interface Exercise {
  name: string;
}

const HomeWork1 = () => {
  const exercies: Exercise[] = [
    { name: "1.Uzdevums" },
    { name: "2.Uzdevums" },
    { name: "3.Uzdevums" },
  ];

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
        return <Exercise1></Exercise1>;
      case 1:
        return <Exercise2></Exercise2>;
      case 2:
        return <Exercise3></Exercise3>;
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

export default HomeWork1;
