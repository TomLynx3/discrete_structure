import { Paper, Grid, Box, Typography } from "@mui/material";

const Exercise2_3 = () => {
  return (
    <Paper
      elevation={3}
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#d9e9e4",
        marginTop: "2rem",
      }}
    >
      <Grid container xs={12} spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <Typography variant="h6" textAlign="center">
            Veidot grafu, kurš kopai &#123; 2,3,6,4,9,12,36,72 &#125; uzrāda
            attiecību R: “dalās bez atlikuma”.
          </Typography>
          <Box display="flex" justifyContent="center">
            <img src="/homework2/hasse_3.png" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              sup&#123; 2,6 &#125; = 12
            </Grid>
            <Grid item xs={12}>
              inf&#123; 4,36 &#125; = 4
            </Grid>
            <Grid item xs={12}>
              sup&#123; 4,9 &#125; = neeksiste
            </Grid>
            <Grid item xs={12}>
              sup&#123; 4,12 &#125; = 36
            </Grid>
            <Grid item xs={12}>
              inf&#123; 6,72 &#125; = 6
            </Grid>
            <Grid item xs={12}>
              inf&#123; 9,72 &#125; = 9
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Exercise2_3;
