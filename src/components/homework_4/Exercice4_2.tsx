import { Grid, Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import Image from "../../assets/homework4/graph.png";
import DijkstraAlg from "./DijkstraAlg";
import DijkstraAlgImpl from "./DijkstraAlgImpl";
import DijkstraAlSc from "./DijkstraAlgSc";
import DijkstraProg from "./DijkstraProg";

const Exercise4_2 = () => {
  return (
    <Grid container item xs={12} spacing={2} style={{ marginTop: "1rem" }}>
      <Grid item xs={6}>
        <Box
          display="flex"
          justifyContent="center"
          marginTop="0rem"
          height="400px"
        >
          <img src={Image} />
        </Box>
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
            Jāmeklē īsāku ceļu no S=1 uz t=3 ar Deikstra metodi
          </Typography>
          <DijkstraAlg></DijkstraAlg>
          <DijkstraAlSc></DijkstraAlSc>
          <DijkstraProg></DijkstraProg>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise4_2;
