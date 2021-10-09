import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const ExerciseSwitcher = ({ nextEx, currentEx, prevEx }: any) => {
  return (
    <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3 }} xs={10}>
      <Grid item xs={12}>
        <Button
          variant="contained"
          fullWidth
          style={{ margin: "0.5rem" }}
          onClick={nextEx}
          disabled={currentEx === 2}
        >
          Nākamais uzdevums
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          fullWidth
          style={{ margin: "0.5rem" }}
          disabled={currentEx === 0}
          onClick={prevEx}
        >
          Iepriekšējais uzdevums
        </Button>
      </Grid>
    </Grid>
  );
};

export default ExerciseSwitcher;
