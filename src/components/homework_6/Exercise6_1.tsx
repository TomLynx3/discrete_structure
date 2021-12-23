import { Grid, Paper, Box, Typography } from "@mui/material";
import Image from "../../assets/homework6/graph_intial.png";
import Fulkerson from "./Fulkerson";
import FulkersonTest from "./FulkersonTest";
import PD_Work from "./PD_Work";
const Exercise6_1 = () => {
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
            height="400px"
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
          <PD_Work />
          <Fulkerson></Fulkerson>
          <FulkersonTest />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise6_1;
