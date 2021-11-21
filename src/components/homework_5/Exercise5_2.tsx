import { Grid, Paper, Box, Typography, Button, Link } from "@mui/material";
import Image from "../../assets/homework5/graph.png";
import Floyd from "./Floyd";
const Exercise5_2 = () => {
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
          <Floyd></Floyd>
          <Typography variant="h5" align="center">
            Nospiežot pogu leja var parbaudīt Floida algoritmu vietnē
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Link
              align="center"
              href="http://graphonline.ru/en/?graph=cBVQtcpOETpFpsIR"
              target="_blank"
            >
              Floida algoritma kalkulators
            </Link>
          </div>
          <Typography variant="h6" align="center">
            Vietnē no komandrīkiem ir jaizvēlas <i>Algorithms</i> un jaizvēlas{" "}
            <i>Floyd–Warshall </i>
          </Typography>
          <Typography variant="h6" align="center">
            Pēc tam zem komandrīkiem no labās puses būs pieejama poga{" "}
            <i>Show distance matrix</i> nospiežot šo pogu būs pieejāma rezultātu
            matrica
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise5_2;
