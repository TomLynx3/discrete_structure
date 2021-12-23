import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import Image from "../../assets/homework6/graph_iteration_1.png";
const Iteration1 = () => {
  return (
    <Fragment>
      <Typography variant="h5" style={{ margin: "1rem", fontWeight: "bold" }}>
        I.Iteracija
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        1.Solis
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        S(+S, {"\u221E"})
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        2.Solis
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        a) Г(S) = &#123;x1, x3&#125;
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x1: (+S,min({"\u221E"},10-0))=(+S,10)
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x3: (+S,min({"\u221E"},31-0))=(+S,31)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Г(x1) = &#123;t&#125;
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        t: (+x1,min(10,25-0))=(+x1,10)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Ir iezīmēta tīkla izeja un &delta;(Xt) = 10
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        Plūsmu maiņa:
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        t: [+x1,10] plūsma lokā (x1,t)=0+10 = 10
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        x1: [+S,10] plūsma lokā (s,x1) = 0+10 = 10
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        Loks (S,x1) ir piesātināts loks ceļā: S-x1-t
      </Typography>
      <Grid item xs={12} display="flex" justifyContent="center">
        <img src={Image} width="500px" height="300px" />
      </Grid>
    </Fragment>
  );
};

export default Iteration1;
