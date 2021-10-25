import { Paper, Grid, Typography, Box } from "@mui/material";
import Image from "../../assets/homework3/pilsetas.png";
import Exercise3_2Matrix from "./Exercise3_2Martrix";
const Exercise3_2 = () => {
  return (
    <Grid container item xs={12} spacing={2} style={{ marginTop: "1rem" }}>
      <Grid item xs={4}>
        <Paper
          elevation={3}
          style={{ height: "100%", backgroundColor: "#d9e9e4" }}
        >
          <Box display="flex" justifyContent="center">
            <img
              src={Image}
              style={{ height: "400px", width: "650px", marginTop: "5rem" }}
            />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper
          elevation={3}
          style={{
            height: "550px",
            backgroundColor: "#d9e9e4",
            overflowY: "scroll",
          }}
        >
          <Exercise3_2Matrix></Exercise3_2Matrix>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise3_2;
