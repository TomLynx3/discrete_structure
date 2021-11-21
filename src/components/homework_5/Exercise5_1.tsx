import { Box, Paper, Typography, Grid } from "@mui/material";
import Image from "../../assets/homework5/graph.png";
import WeightMatrix from "./WeightMatrix";

const Exercise5_1 = () => {
  return (
    <Grid container item xs={12} spacing={2} style={{ marginTop: "1rem" }}>
      <Grid item xs={6}>
        <Paper
          elevation={2}
          style={{ height: "80%", backgroundColor: "#d9e9e4" }}
        >
          <Box
            display="flex"
            justifyContent="center"
            marginTop="0rem"
            height="100%"
          >
            <img src={Image} />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={6}>
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

export default Exercise5_1;
