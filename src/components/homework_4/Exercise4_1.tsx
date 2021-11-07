import { Typography, Grid, Paper, Box } from "@mui/material";
import Image from "../../assets/homework4/graph.png";
import WeightMatrix from "./WeightMatrix";

const Exercise4_1 = () => {
  return (
    <Grid container item xs={12} spacing={2} style={{ marginTop: "1rem" }}>
      <Grid item xs={4}>
        <Paper
          elevation={2}
          style={{ height: "80%", backgroundColor: "#d9e9e4" }}
        >
          <Box
            display="flex"
            justifyContent="center"
            marginTop="0rem"
            height="400px"
          >
            <img src={Image} />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper
          elevation={3}
          style={{
            height: "500px",
            backgroundColor: "#d9e9e4",
            overflowY: "scroll",
          }}
        >
          <Typography variant="h6" align="center">
            Svaru matrica
          </Typography>
          <WeightMatrix></WeightMatrix>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise4_1;
