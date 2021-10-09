import { Grid, Paper, Typography, Box } from "@mui/material";
import Exercise3Matrix from "./Exercise_3_Matrix";

const Exercise3 = () => {
  return (
    <Grid container item xs={12} spacing={2} style={{ marginTop: "1rem" }}>
      <Grid item xs={6}>
        <Paper
          elevation={3}
          style={{ height: "80%", backgroundColor: "#d9e9e4" }}
        >
          <Typography variant="h5" textAlign="center">
            Dots grafs. Uzrakstīt tā blakusvirsotņu matricu un incidentes
            matricu.
          </Typography>
          <Box display="flex" justifyContent="center" marginTop="5rem">
            <img src="/homework1/uzd_3.png" />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper
          elevation={3}
          style={{
            height: "550px",
            backgroundColor: "#d9e9e4",
            overflowY: "scroll",
          }}
        >
          <Exercise3Matrix></Exercise3Matrix>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise3;
